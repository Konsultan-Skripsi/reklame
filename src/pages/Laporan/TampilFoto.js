import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView, SafeAreaView , TextInput} from 'react-native';

import * as ImagePicker from 'expo-image-picker';

  const Laporan = () => {
  const [namaPelapor, setNamaP] = useState('');
  const [nikPelapor, setNikP] = useState('');
  const [notlp, setNotlp] = useState('');
  const [alamat, setAlamatPelapor] = useState('');
  const [email, setEmail] = useState('');

  // The path of the picked image
  const [pickedImagePath, setPickedImagePath] = useState('');
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
      console.log(result.uri);
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
      console.log(result.uri);
    }
  }

  return (
    <ScrollView>
    <SafeAreaView>
<View style={styles.hal} >
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
  <Text style={styles.label}> Email </Text>
  <TextInput style={styles.inputBox}
          value={email}
          placeholder= "Email"
          onChangeText={(value=>setEmail(value))}
          >
  </TextInput>

  <Text style={styles.label}> Foto </Text>
  <View style={styles.screen}>
      <View style={styles.buttonContainer}>
        <Button color={'#a0522d'} onPress={showImagePicker} title="Pilih dari Galeri" />
        <Button color={'#e9967a'} onPress={openCamera} title="Pilih dari Camera" />
      </View>

      <View style={styles.imageContainer}>
        {
          pickedImagePath !== '' && <Image
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
  >
  </TextInput>
</View>
<View style={styles.boxbutton}>
        <Button
          title="Laporkan"
        onPress={() => alert('Inputan disimpan')}
        // onPress={upLap}
        />
</View>
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

  },
  container: {
    flex: 1,
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
    margin: (20,10),
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
  },
  image: {
    width: 120,
    height: 100,
    resizeMode: 'cover'
  }
});