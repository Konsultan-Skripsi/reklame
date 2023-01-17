import React, { useState } from 'react';
import { SafeAreaView ,StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker';

function Daftar() {
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

  const dafAkun = () => {

    var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var frmdata = new FormData();
        frmdata.append("nama", nama);
        frmdata.append("email", alamat);
        frmdata.append("username", user);
        frmdata.append("password", pass);
        frmdata.append("no_hp", selectedValue);

var urlencoded = new URLSearchParams();
urlencoded.append("nama_pemohon", nama);
urlencoded.append("username", user);
urlencoded.append("password", pass);
urlencoded.append("nik", nik);
urlencoded.append("alamat", almt);
urlencoded.append("npwp", npwp);
urlencoded.append("no_tlp", tlp);
urlencoded.append("id_jbusaha", selectedValue);
urlencoded.append("nama_perusahaan", perusahaan);
urlencoded.append("jabatan_perusahaan", jabatan);
urlencoded.append("alamat_perusahaan", alamat);

    var postData = {
        method: 'POST',
        credentials: "include",
        body: frmdata,
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      };

    fetch("https://wisgunkid.my.id/api/daftar", postData)
      .then(response => response.json())
      .then(result => {
        alert(result)
      })
      .catch(error => alert(error));
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

        <Text style={styles.label}> Alamat </Text>
        <TextInput style={styles.inputtexarea}
          multiline={true}
          numberOfLines={3}
          placeholder="Alamat"
          value={almt}
          onChangeText={(value=>setAlmt(value))}
          ></TextInput>

        <Text style={styles.label}> No. Tlp </Text>
          <TextInput style={styles.inputBox}
          keyboardType={'numeric'}
          placeholder="No Telepon / Hp"
          value={tlp}
          onChangeText={(value=>setTlp(value))}
          >
          </TextInput>
        <Text style={styles.label}> NIK </Text>
          <TextInput style={styles.inputBox}
          placeholder="NIK"
          keyboardType={'numeric'}
          value={nik}
          onChangeText={(value=>setNik(value))}
          >
          </TextInput>
        <Text style={styles.label}> NPWP </Text>
          <TextInput style={styles.inputBox}
          placeholder="NPWP"
          keyboardType={'numeric'}
          value={npwp}
          onChangeText={(value=>setNpwp(value))}
          >
          </TextInput>
        <Text style={styles.label}> Jenis Badan Usaha </Text>
        <Picker
        style={styles.inputBoxPix}
        selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) =>
          setSelectedValue(itemValue)}
        >
        <Picker.Item label="Pilih Badan Usaha" value="" />
          <Picker.Item label="PT" value="PT" />
          <Picker.Item label="CV" value="CV" />
          <Picker.Item label="FA" value="FA" />
        </Picker>
          {/* <TextInput style={styles.inputBox}>
          </TextInput> */}
        <Text style={styles.label}> Nama Perusahaan</Text>
          <TextInput style={styles.inputBox}
          placeholder="Nama Perusahaan"
          value={perusahaan}
          onChangeText={(value=>setPerusahaan(value))}
          >
          </TextInput>
        <Text style={styles.label}> Jabatan di Perusahaan</Text>
          <TextInput style={styles.inputBox}
          placeholder="Jabatan Perusahaan"
          value={jabatan}
          onChangeText={(value=>setJabatan(value))}
          >
          </TextInput>
        <Text style={styles.label}> Alamat Perusahaan</Text>
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
        {/* <Button
          title="Kembali"
          color={'#dc3545'}
        onPress={() => alert('Inputan di Reset')}
        /> */}
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