import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView, SafeAreaView , TextInput, ImageBackground} from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

const image = { uri: "http://smartreklame.my.id/assets/img/reklame bg-laporkan-login.png" }; 

  const Laporan = ({ navigation }) => {
  const [namaPelapor, setNamaP] = useState('');
  const [nikPelapor, setNikP] = useState('');
  const [notlp, setNotlp] = useState('');
  const [alamat, setAlamatPelapor] = useState('');
  const [keterangan, setKeterangan] = useState('');
  // const [email, setEmail] = useState('');
  const [uploading, startUploading] = useState(false);
  const [pickedImagePath, setPickedImagePath] = useState(null);
  // const YOUR_SERVER_URL = "https://wisgunkid.my.id/api/cobaupload";
  const YOUR_SERVER_URL = "https://smartreklame.my.id/api/lapor";
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);
  const getMimeType = (ext) => {
    // mime type mapping for few of the sample file types
    switch (ext) {
      case 'pdf': return 'application/pdf';
      case 'jpg': return 'image/jpeg';
      case 'jpeg': return 'image/jpeg';
      case 'png': return 'image/png';
    }
  }
  
  // This function is triggered when the "Select an image" button pressed
  const showImagePicker = async () => {
    // Ask the user for the permission to access the media library 
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync();
    // Explore the result
    console.log(result);
    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      // console.log(result.uri);
    }
  }
  // This function is triggered when the "Open camera" button pressed
  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }
    const result = await ImagePicker.launchCameraAsync();
    // Explore the result
    console.log(result);
    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      // console.log(result.uri);
    }
  }

  const uploadFile = async () => {
    const fileUri = pickedImagePath;
      let filename = fileUri.split('/').pop();
      const extArr = /\.(\w+)$/.exec(filename);
      const type = getMimeType(extArr[1]);

    setPickedImagePath(null);
    startUploading(true);

    let formData = new FormData();
    formData.append('foto', { uri: fileUri, name: filename, type });
    formData.append('nama', namaPelapor);
    formData.append('nik', nikPelapor);
    formData.append('no_tlp', notlp);
    formData.append('alamat', alamat);
    formData.append('keterangan', keterangan);
    // formData.append('jenis', '1');

    await fetch(YOUR_SERVER_URL, {
        method: 'POST',
        body: formData,
        headers: {
          'content-type': 'multipart/form-data',
        },
      })
      .then(response => response.json())
      .then(result => {
          startUploading(false);
          console.log(result.pesan);
          if (result.pesan == 'Data Masuk') {
            alert('Berhasil disimpan')
            navigation.navigate('HalamanUtama')
          }
      })
      .catch(error => {
        console.log('error', error)
        alert('Gagal ditambahkan')
      });
    // const response = await fetch(YOUR_SERVER_URL , {
    //     method: 'POST',
    //     body: formData,
    //     headers: {
    //       'content-type': 'multipart/form-data',
    //     },
    //   });
    // startUploading(false);
    // const responseAgain = await response.text();
    // const json = await response.json();
    // console.log(responseAgain);
    // console.log(json);
    
    // return response;

  }

  return (
    <ScrollView>
    <SafeAreaView>
<View style={styles.hal} >
<ImageBackground source={image} resizeMode="cover" style={styles.imagebackground}>
<View style={styles.container} >
<Text style={styles.h3}>Laporkan Reklame Ilegal</Text>
<View style={styles.line}></View>
</View>
<View style={styles.boxform}>

  <Text style={styles.label}> Nama </Text>
  <TextInput style={styles.inputBox}
  placeholder="Nama"
  value={namaPelapor}
  onChangeText={(value=>setNamaP(value))}
  >
  </TextInput>
  <Text style={styles.label}> NIK </Text>
  <TextInput style={styles.inputBox} 
    keyboardType={'numeric'}
    placeholder="NIK"
    value={nikPelapor}
    onChangeText={(value=>setNikP(value))}
  >
  </TextInput>
  <Text style={styles.label}> No. Tlp </Text>
  <TextInput style={styles.inputBox}
    keyboardType={'numeric'}
    value={notlp}
    onChangeText={(value=>setNotlp(value))}
  >
  </TextInput>
  <Text style={styles.label}> Alamat </Text>
  <TextInput style={styles.inputtexarea}
    multiline={true}
    numberOfLines={2}
    placeholder="Alamat"
    value={alamat}
    onChangeText={(value=>setAlamatPelapor(value))}
  >
  </TextInput>
  {/* <Text style={styles.label}> Email </Text>
  <TextInput style={styles.inputBox}
          value={email}
          placeholder= "Email"
          onChangeText={(value=>setEmail(value))}
          >
  </TextInput> */}

  <Text style={styles.label}> Foto </Text>
  <View style={styles.screen}>
      <View style={styles.buttonContainer}>
        <Button color={'#a0522d'} onPress={showImagePicker} title="Pilih dari Galeri" />
        <Button color={'#e9967a'} onPress={openCamera} title="Pilih dari Camera" />
      </View>

        
      <View style={styles.imageContainer}>
      { pickedImagePath !== '' && <Image
            source={{ uri: pickedImagePath }}
            style={styles.image}
          />
      }
      </View> 
  </View>
  <Text style={styles.label}> Keterangan </Text>
  <TextInput
          multiline={true}
          numberOfLines={3}
          style={styles.inputtexarea}
          placeholder="Keterangan"
          value={keterangan}
          onChangeText={(value=>setKeterangan(value))}
  >
  </TextInput>
</View>
  <View style={styles.boxbutton}>
  { uploading ? <Text>Mohon Tunggu Hingga Selesai</Text> :
          <Button
          title="Laporkan"
          onPress={uploadFile}
          /> }
          {/* /> } */}
  </View>
  </ImageBackground>
</View>
    </SafeAreaView>
    </ScrollView>
  );
}

export default Laporan;

// Kindacode.com
// Just some styles
const styles = StyleSheet.create({
  hal: {
    flex: 1
  },
  imagebackground: {
    resizeMode: 'cover'
  },
  image: {
    width: 300,
    height: 300
  },
  container: {
    alignItems: 'center',
    marginTop: 30
    // justifyContent: 'center',
  },
  h3: {
    fontSize: 18,
  },
  line: {
    width: 200,
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#01030e',
  },
  boxform: {
    marginTop: 20,
    margin: (20,10)
  },
  label: {
    fontSize:12
  },
  inputBox: {
    marginTop:1,
    height: 30,
    backgroundColor:'#fff',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal:10,
    fontSize:12,
    color:'#01030e',
    marginVertical: 12,
  },
  inputtexarea: {
    marginTop:1,
    backgroundColor:'#fff',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal:10,
    paddingVertical:5,
    fontSize:12,
    color:'#01030e',
    marginVertical: 12,
  },
  boxbutton: {
    margin: (20),
    // marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  screen: {
    // backgroundColor: 'green',
    marginTop: 10,
  },
  buttonContainer: {
    // width: 400,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    padding: 10
  }
});