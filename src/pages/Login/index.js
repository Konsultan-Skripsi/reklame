
import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity, KeyboardAvoidingView , TouchableWithoutFeedback, Keyboard } from 'react-native';

  const Login = ({navigation}) => {

  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const subLogin = async () => {
    if (user === "") {
      alert("User Harus disi dahulu");
    } else if (pass === "") {
      alert("Pass Harus disi dahulu");
    } else {

      var myHeaders = new Headers();
      // myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
      myHeaders.append("Cookie", "ci_session=6rhjn7f3pog7uh71jsnqv2i54d6gr3fa");

      var formdata = new FormData();
        formdata.append("username", user);
        formdata.append("password", pass);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

      fetch("https://smartreklame.my.id/api/logincek", requestOptions)
        .then(response => response.json())
        .then(res => {
          // pes = JSON.parse(res);
          // alert(res.pesan);
          // console.log(res);
          if (res.pesan == 'Data ada') {
              let idLogin = res.data.id;
              let namaLogin = res.data.nama;
              // navigation.replace('Menu');
              navigation.navigate('Menu',{
                itemId: idLogin,
                nama : namaLogin
              });
          } else {
            alert('username dan password tidak ada');
          }

        })
        .catch(error => console.log('error', error));

      // await fetch('https://wisgunkid.my.id/api/ceklogin', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(data)
      // })
      // .then(response => response.json())
      // .then(hah => {
      //   // va = JSON.parse(hah);
      //   alert(hah.pesan);
      // })

    }
  } 

  // render (){
    return (

      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      >

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <View style={styles.container}>
        <Text style={styles.h3}>APLIKASI PERIZINAN</Text>
        <Text style={styles.h3}>REKLAME</Text>
        
        <View style={styles.buttonContainer}>
        <Text style={styles.h4}> Silahkan Login</Text>
        <View style={styles.form}>
        {/* <Text>Username</Text> */}
        <TextInput style={styles.inputBox}
        placeholder="Username"
        placeholderTextColor = "#01030e"
        selectionColor="#01030e"
        value={user}
        onChangeText={(value=>setUser(value))}
        // keyboardType="username"
        // onSubmitEditing={()=> this.password.focus()}
        />
        <TextInput style={styles.inputBox}
        placeholder="Password"
        placeholderTextColor = "#01030e"
        selectionColor="#01030e"
        secureTextEntry={true}
        value={pass}
        onChangeText={(value=>setPass(value))}
        // keyboardType="username"
        // onSubmitEditing={()=> this.password.focus()}
        />
        </View>
        {/* <View> */}
        <TouchableOpacity onPress={subLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Daftar')}
        >
        <Text style={styles.buttonText}>Daftar</Text>
        </TouchableOpacity>
        
        {/* </View> */}
        </View>

        <StatusBar style="auto" />
      </View>

      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      
    );
  // }
}

export default Login;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  h3: {
    fontSize: 24,
  },
  h4: {
    marginTop: 15,
    fontSize: 20,
  },
  form: {
    marginTop: 15,
  },
  buttonContainer: {
    // backgroundColor: '#fff',
    width: 300,
    height:150,
    // marginTop: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#01030e',
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 10,
  },
  inputBox: {
    width:180,
    height: 40,
    backgroundColor:'#fff',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal:10,
    fontSize:16,
    color:'#01030e',
    marginVertical: 7
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
  button: {
    marginTop:20,
    width:100,
    borderRadius: 15,
    backgroundColor: '#36b9cc',
    marginVertical: 7,
    paddingVertical: 10
  },
});
