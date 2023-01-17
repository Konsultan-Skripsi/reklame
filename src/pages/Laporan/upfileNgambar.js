

import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, Image, View, Platform, Text, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import Constants from 'expo-constants';
 
export default function DocumentPickerExample() {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [uploading, startUploading] = useState(false);
  const [nama, setNama] = useState('');
  const YOUR_SERVER_URL = "https://wisgunkid.my.id/api/cobaupload";
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
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
 
    console.log(result);
 
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const pickCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }
    const result = await ImagePicker.launchCameraAsync();
    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  
  const pickFile = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: '*/*'
    });
 
    console.log(result);
 
    if (!result.cancelled) {
      setFile(result.uri);
    }
  };
  const uploadFile = async () => {
    if(file||image){
      const fileUri = file ? file : image;
      let filename = fileUri.split('/').pop();
 
      const extArr = /\.(\w+)$/.exec(filename);
      const type = getMimeType(extArr[1]);
      setImage(null);
      // setFile(null);
      startUploading(true);
 
      let formData = new FormData();
 
      formData.append('filetoupload', { uri: fileUri, name: filename, type });
      formData.append('nama', nama);
      formData.append('jenis', '1');
 
      const response = await fetch(YOUR_SERVER_URL , {
        method: 'POST',
        body: formData,
        headers: {
          'content-type': 'multipart/form-data',
        },
      });
      startUploading(false);
      const responseAgain = await response.text();
      console.log(responseAgain);
      return response;
    }
};
 
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={styles.label}> Nama </Text>
          <TextInput style={styles.inputBox}
          placeholder="Nama"
          value={nama}
          onChangeText={(value=>setNama(value))}
          >
          </TextInput>
      <Button title="Pick a Photo from mobile" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <View style={{ height: 50 }}/>
      <Button title="Pick a Camera from mobile" onPress={pickCamera} />
      <View style={{ height: 50 }}/>
      { uploading ? <Text>Uploading</Text> :
      <Button title="Upload" onPress={uploadFile} /> }
    </View>
  );
}

const styles = StyleSheet.create({
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
});