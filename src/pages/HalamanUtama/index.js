import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, ImageBackground} from 'react-native';

const image = { uri: "http://smartreklame.my.id/assets/img/reklame bg-awal.png" };

const HalamanUtama = ({ navigation }) => {
    return (
      <ScrollView>
      <SafeAreaView>
      <View style={styles.hal}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        {/* <Text style={styles.h3}>SISTEM INFORMASI PERIZINAN</Text>
        <Text style={styles.h3}>PERIZINAN DAN PEMETAAN</Text>
        <Text style={styles.h3}>REKLAME</Text> */}
        
        <View style={styles.conbutton}>
          <TouchableOpacity
          style={styles.button} 
          onPress={() => navigation.navigate('Laporan') }
          >
          <Text style={styles.textbutton}>LAPORKAN</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login') }
            >
            <Text style={styles.textbutton}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      </View>
      </SafeAreaView>
      </ScrollView>
    );
}

export default HalamanUtama;

const styles = StyleSheet.create({
  hal: {
    // backgroundColor: '#fff',
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height:680
    // width: 400,
  },
  container: {
    // backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 30
    // justifyContent: 'center',
  },
  h3: {
    fontSize: 24,
  },
  conbutton: {
    // flex: 1,
    alignItems: 'center',
    // marginTop: 350
  },
  button: {
    width : 180,
    height: 60,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: '#0d6efd',
    padding: 10,
    marginVertical:30,
    justifyContent: 'center',
  },
  textbutton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});