
import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, SafeAreaView, Button} from 'react-native';
// import DocumentPicker, { types } from 'react-native-document-picker';
import * as DocumentPicker from 'expo-document-picker';

  const Laporan = () => {
    const [namaPelapor, setNamaP] = useState('');
    const [nikPelapor, setNikP] = useState('');
    const [notlp, setNotlp] = useState('');
    const [alamat, setAlamatPelapor] = useState('');
    const [email, setEmail] = useState('');

    const [fileres, setFileResponse] = useState([]);
    
    const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.getDocumentAsync({
        presentationStyle: 'fullScreen',
        type: 'image/*'
      });
      setFileResponse(response);
    } catch (err) {
      console.warn(err);
    }
  }, []);

  const upLap = () => {

    // var uri = fileres.uri;
    // var namagambar = fileres.name;
    // alert(hahahaha);
    // alert(fileres.name);
    // alert(fileres.type);
    // var myHeaders = new Headers();
    //   myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var frmdata = new FormData();
        frmdata.append("nama", namaPelapor);
        frmdata.append("jenis", "1");
        frmdata.append("harga", "2000");
        frmdata.append("jam", "18.30.00");
        frmdata.append("kuli", "6");
        frmdata.append("fasi", "6");
        frmdata.append("indah", "7");
        frmdata.append("gambar", fileres);
        // frmdata.append("gambar", {
        //   name: fileres.name,
        // });
        frmdata.append("alamat", alamat);
        frmdata.append("deskripsi", email);
        frmdata.append("long", "110.53598339989387");
        frmdata.append("lang", "-7.867896651714987");

    var postData = {
        method: 'POST',
        body: frmdata,
        redirect: 'follow',
        headers: {
            'Content-Type': 'multipart/form-data; ',
          },
      };

    fetch("https://wisgunkid.my.id/api/cobaUpload", postData)
      .then(response => response.json())
      .then(result => {
        alert(result)
      })
      .catch(error => alert(error));
  }

    return (
      <ScrollView>
      <SafeAreaView>
      <View style={styles.hal} >
      <View style={styles.container}>
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
      {
      <Text style={styles.label}> {fileres.size} -------- {fileres.type} +++++++++ {fileres.name} --------- {fileres.uri} </Text>
      }
          <Button title="Choose File" onPress={handleDocumentSelection} />
          <TextInput style={styles.inputBox}>
          </TextInput>

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
        // onPress={() => alert('Inputan disimpan')}
        onPress={upLap}
        />
      </View>
      </View>
      </SafeAreaView>
      </ScrollView>
    );
}

export default Laporan;

const styles = StyleSheet.create({
  hal: {
    // backgroundColor: '#fff',
  },

  container: {
    flex: 1,
    // backgroundColor: '#fff',
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
});


{/* fileres.map((file, index) => (
        <Text
          key={index.toString()}
          style={styles.uri}
          numberOfLines={1}
          ellipsizeMode={'middle'}>
          {file?.uri}
        </Text>
      )) */}