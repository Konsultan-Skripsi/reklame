import React, {useState , useEffect} from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';

const Cek = () => {
    
    // const [isLoading, setLoading] = useState(true);
    const [status , setStatus] = useState(null);
    const [judul , setJudul] = useState(null);
    // const YOUR_SERVER_URL = "https://wisgunkid.my.id/api/carijenis";
    const YOUR_SERVER_URL = "https://smartreklame.my.id/api/ijin/cari";
    // console.log(status);

    const cariJudul = async () => {

        let formData = new FormData();
        formData.append('judul', judul);

        var requestOptions = {
        method: 'POST',
        body: formData,
        redirect: 'follow'
    };

        // setJudul(null);
        await fetch(YOUR_SERVER_URL, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result.pesan);
            if (result.pesan == 'Ada') {
                const sta = result.data.ijin;
                // console.log(result.data.ijin);
                // console.log(sta);
                // alert(result.data.id_jenis_wisata);
                setStatus(sta);
            }
            
            if (result.pesan == 'kosong') {
                alert("Tidak ada judul reklame");
                setStatus(null)
            }

        })
        .catch(error => alert(error));

    }

    return(
        <ScrollView>
        <SafeAreaView>
        <View style={styles.container}>
        <Text style={styles.h3}>Cek Pengajuan Izin Reklame</Text>
        <View style={styles.line}></View>
        </View>
        
        <View style={styles.boxform}>
        <Text style={styles.label}> Judul Reklame </Text>
        
        <TextInput
        style={styles.inputBox}
        placeholder="Judul Reklame"
        value={judul}
        onChangeText={(value=>setJudul(value))}
        >
        </TextInput>

        </View>

        <View style={styles.conbutton}>
        <TouchableOpacity 
        style={styles.button}
        onPress={cariJudul}
        >
            <Text style={styles.buttonText}>CARI</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.boxform}>
        {
            <Text> STATUS : {status}</Text>
        }
        </View>

        </SafeAreaView>
        </ScrollView>
    );
}

export default Cek;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 20
    },
    h3: {
        fontSize: 18,
    },
    line: {
        width: 230,
        marginTop: 5,
        borderWidth: 1,
        borderColor: '#01030e',
    },
    boxform: {
        marginTop: 35,
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
    conbutton: {
        backgroundColor:'#fff',
        alignItems: 'center',
    },
    button: {
    marginTop:10,
    width:100,
    borderRadius: 15,
    backgroundColor: '#36b9cc',
    marginVertical: 7,
    paddingVertical: 10
    },
    buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
    },
});