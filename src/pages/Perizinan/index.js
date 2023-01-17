import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, TextInput, ScrollView, SafeAreaView, Button, Dimensions} from 'react-native';
import {Picker} from '@react-native-picker/picker';

  const Perizinan = ({route,navigation}) => {

    // console.log(route.params.idP);
    const [selectedValue, setSelectedValue] = useState('Pilih Bentuk');
    const [judul, setJudul] = useState('');
    const [tinggi, setTinggi] = useState('');
    const [panjang, setPanjang] = useState('');
    // const [lokasi, setLokasi] = useState('');
    const [lok , setLok] = useState({latitude:0, longitude:0});
    // console.log(lok);
    const id_pemohon = route.params.data.itemId;
    console.log(id_pemohon);
    // const id_pemohon = 5;
    const ijin = 'menunggu';
    const tglE = new Date().toISOString().slice(0, 10);
    // const tglE = '2022-06-01';
    // const tang = tglE.toLocaleDateString();

    console.log(tglE);

    const will = {
      latitude: -7.792556,
        longitude: 110.3763614,
        latitudeDelta: 0.0917,
        longitudeDelta: 0.0917,
    };

    const izin = async () => {
      if (judul === "") {
        alert("Judul Harus diisi");
      } else if(tinggi === "") {
        alert("Tinggi Harus diisi");
      } else if (panjang === "") {
        alert("Tinggi Harus diisi");
      } else if (lok.latitude === 0 && lok.longitude === 0) {
        alert("Lokasi Harus diisi");
      } else {

      var myHeaders = new Headers();
      // myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
      myHeaders.append("Cookie", "ci_session=6rhjn7f3pog7uh71jsnqv2i54d6gr3fa");

      var formdata = new FormData();
        formdata.append("judul_reklame", judul);
        formdata.append("tinggi", tinggi);
        formdata.append("panjang", panjang);
        formdata.append("longitude", lok.longitude);
        formdata.append("latitude", lok.latitude);
        formdata.append("id_bentuk", selectedValue);
        formdata.append("id_pemohon", id_pemohon);
        formdata.append("ijin", ijin);
        formdata.append("tanggal", tglE);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

      console.log(requestOptions);

      await fetch ("https://smartreklame.my.id/api/ijin", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        if (result.pesan == 'Data Masuk') {
          alert("Data sudah masuk! Silahkan tunggu konfirmasi selanjutnya");
          navigation.navigate('Menu', {
            itemId: id_pemohon,
            nama: route.params.data.nama
          });
        }
        // alert(result);
      })
      .catch(error => alert(error));
      }
    }

    return (
      <ScrollView>
      <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.h3}>Form Pengajuan Izin Reklame</Text>
      </View>

      <View style={styles.boxform}>
        <Text style={styles.label}> Judul Reklame </Text>
          <TextInput style={styles.inputBox}
          placeholder = "Judul Reklame"
          value={judul}
          onChangeText={(value=>setJudul(value))}
          >
          </TextInput>
        <Text style={styles.label}> Bentuk Reklame </Text>
          <Picker
          style={styles.inputBox}
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) =>
          setSelectedValue(itemValue)}
          >
          <Picker.Item label="Pilih Bentuk" value="" />
          <Picker.Item label="Kecil" value="1" />
          <Picker.Item label="Sedang" value="2" />
          <Picker.Item label="Besar" value="3" />
          </Picker>
          {/* <TextInput style={styles.inputBox}>
          </TextInput> */}
        <Text style={styles.label}> Tinggi Reklame (m) </Text>
          <TextInput style={styles.inputBox}
          keyboardType={'numeric'}
          value={tinggi}
          onChangeText={(value=>setTinggi(value))}
          >
          </TextInput>
        <Text style={styles.label}> Panjang Reklame (m) </Text>
          <TextInput style={styles.inputBox} 
          keyboardType={'numeric'}
          value={panjang}
          onChangeText={(value=>setPanjang(value))}
          >
          </TextInput>
        {/* <Text style={styles.label}> Lebar Reklame (m) </Text>
          <TextInput style={styles.inputBox} 
          keyboardType={'numeric'}>
          </TextInput> */}
      <Text style={styles.label}> Lokasi </Text>
      {/* <TextInput style={styles.inputBox}
          placeholder = "Lokasi Reklame"
          value={lokasi}
          onChangeText={(value=>setLokasi(value))}
          >
      </TextInput> */}
      <View style={styles.boxmap}>

      <MapView style={styles.map}
      region={will}
      onPress={(e) => setLok(e.nativeEvent.coordinate)}>
      {
        <MapView.Marker coordinate={lok} />
      }
      </MapView>

      </View>

      </View>

      <View style={styles.boxbutton}>
        {/* <Button
          title="Kembali"
          color={'#dc3545'}
        onPress={() => alert('Inputan di Reset')}
        /> */}
        <Button
          title="Daftar"
        onPress={izin}
        />
      </View>

      </SafeAreaView>
      </ScrollView>
    );
}

export default Perizinan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 15
    // justifyContent: 'center',
  },
  h3: {
    fontSize: 20,
  },
  boxform: {
    marginTop: 35,
    margin: (20,10),
    // backgroundColor: 'green',
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
    height: 90,
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
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxmap: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width - 10,
    height: Dimensions.get('screen').height - 250,
    // height: Dimensions.get('window').height - 300,
    // height: 200,
  },
});
