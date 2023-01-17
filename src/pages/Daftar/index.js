import React, { useState, useEffect } from 'react';
import { SafeAreaView ,StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker';
const dataPicker = [
  {
    id: 1,
    pilihan: 'CV'
  },
  {
    id: 2,
    pilihan: 'PT'
  },
  {
    id: 3,
    pilihan: 'FA'
  },
  {
    id: 4,
    pilihan: 'UD'
  }
];

const Daftar = ({navigation}) => {
  // const [jenis, setJenis] = useState([]);
  const [selectedValue, setSelectedValue] = useState('Pilih Bentuk');
  const [nama , setNama] = useState(''); 
  const [user , setUser] = useState(''); 
  const [pass , setPass] = useState('');
  const [almt , setAlmt] = useState(''); 
  const [tlp , setTlp] = useState(''); 
  const [nik , setNik] = useState(''); 
  const [npwp , setNpwp] = useState(''); 
  const [perusahaan , setPerusahaan] = useState(''); 
  const [alamat , setAlamat] = useState('');
  const [jabatan , setJabatan] = useState('');

  // const getDataJenis = async () => {
  //     const response = await fetch('https://wisgunkid.my.id/api/jenis')
  //     const dataku = await response.json()
  //     setJenis(dataku)
  // }

  // useEffect(() => {
  //   getDataJenis()
  // }, [])

  const dafAkun = async () => {

    var myHeaders = new Headers();
    myHeaders.append("Cookie", "ci_session=6rhjn7f3pog7uh71jsnqv2i54d6gr3fa");
      // myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var formdata = new FormData();
        formdata.append("username", user);
        formdata.append("password", pass);
        formdata.append("nama_pemohon", nama);
        formdata.append("id_jbusaha", selectedValue);
        formdata.append("alamat", almt);
        formdata.append("nik", nik);
        formdata.append("npwp", npwp);
        formdata.append("no_tlp", tlp);
        formdata.append("nama_perusahaan", perusahaan);
        formdata.append("jabatan_perusahaan", jabatan);
        formdata.append("alamat_perusahaan", alamat);

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };

      console.log(requestOptions);

      await fetch("https://smartreklame.my.id/api/pengguna", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result.pesan);
        alert(result.pesan);
        if (result.pesan == 'Data Masuk') {
          alert('Data diterima dan siap digunakan');
          navigation.replace('Login');
        } 
        // alert(result)
      })
      .catch(error => { 
        console.log(error);
        alert(error)});
  }

    return (
      <ScrollView style={styles.hal}>
      <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.h3}>Daftar Akun</Text>
        <View style={styles.line}></View>
      </View>

      <View style={styles.boxform}>
        <Text style={styles.label}> Nama </Text>
          <TextInput style={styles.inputBox}
          placeholder="Nama Lengkap"
          value={nama}
          onChangeText={(value=>setNama(value))}
          >
          </TextInput>
        <Text style={styles.label}> Username </Text>
          <TextInput style={styles.inputBox}
          placeholder="Username"
          value={user}
          onChangeText={(value=>setUser(value))}
          >
          </TextInput>
        <Text style={styles.label}> Password </Text>
          <TextInput style={styles.inputBox}
          secureTextEntry={true}
          placeholder="Password"
          value={pass}
          onChangeText={(value=>setPass(value))}
          >
          </TextInput>

        <Text style={styles.label}> Jenis Badan Usaha </Text>
        <Picker
        style={styles.inputBoxPix}
        selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) =>
          setSelectedValue(itemValue)}
        >
        <Picker.Item label="Pilih Badan Usaha" />
        <Picker.Item label="CV" value="1"/>
        <Picker.Item label="PT" value="2" />
        <Picker.Item label="FA" value="3"/>
        <Picker.Item label="UD" value="4"/>
        {/* {
          dataPicker.map((dp) => {
            return <Picker.Item label={dp.pilihan} value={dp.id} />
          })
        } */}
        </Picker>
          {/* <TextInput style={styles.inputBox}>
          </TextInput> */}
          <Text style={styles.label}> Alamat </Text>
          <TextInput style={styles.inputtexarea}
          multiline={true}
          numberOfLines={3}
          placeholder="Alamat"
          value={almt}
          onChangeText={(value=>setAlmt(value))}
          >
          </TextInput>

          <Text style={styles.label}> No Telepon </Text>
          <TextInput style={styles.inputBox}
          keyboardType={'numeric'}
          placeholder="No Telepon"
          value={tlp}
          onChangeText={(value=>setTlp(value))}
          >
          </TextInput>

          <Text style={styles.label}> NIK </Text>
          <TextInput style={styles.inputBox}
          keyboardType={'numeric'}
          placeholder="NIK"
          value={nik}
          onChangeText={(value=>setNik(value))}
          >
          </TextInput>
        
          <Text style={styles.label}> NPWP </Text>
          <TextInput style={styles.inputBox}
          keyboardType={'numeric'}
          placeholder="NPWP"
          value={npwp}
          onChangeText={(value=>setNpwp(value))}
          >
          </TextInput>

          <Text style={styles.label}> Nama Perusahaan </Text>
          <TextInput style={styles.inputBox}
          placeholder="Nama Perusahaan"
          value={perusahaan}
          onChangeText={(value=>setPerusahaan(value))}
          >
          </TextInput>

          <Text style={styles.label}> Jabatan </Text>
          <TextInput style={styles.inputBox}
          placeholder="Jabatan"
          value={jabatan}
          onChangeText={(value=>setJabatan(value))}
          >
          </TextInput>

          <Text style={styles.label}> Alamat Perusahaan </Text>
          <TextInput style={styles.inputtexarea}
          multiline={true}
          numberOfLines={3}
          placeholder="Alamat Perusahaan"
          value={alamat}
          onChangeText={(value=>setAlamat(value))}
          >
          </TextInput>

      </View>

      <View style={styles.boxbutton}>
        <Button
          title="Kembali"
          color={'#dc3545'}
        onPress={() => alert('Inputan di Reset')}
        />
        <Button
        style={styles.mar}
          title="Daftar"
        onPress={dafAkun}
        />
      </View>

      </SafeAreaView>
      </ScrollView>
    );
  }

const styles = StyleSheet.create({
  hal : {
    backgroundColor: '#fff'
  },
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 20
    // justifyContent: 'center',
  },
  h3: {
    fontSize: 20,
  },
  line: {
    width: 150,
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#01030e',
  },
  boxform: {
    marginTop: 20,
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
  inputBoxPix: {
    marginTop:1,
    height: 30,
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
    // marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mar: {
    marginBottom: 50
  }
});

export default Daftar;


// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

// var urlencoded = new URLSearchParams();
// urlencoded.append("username", "axe");
// urlencoded.append("password", "axe");
// urlencoded.append("nama_admin", "dota 2 axe");

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: urlencoded,
//   redirect: 'follow'
// };

// fetch("http://127.0.0.1:8000/api/ambil", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));