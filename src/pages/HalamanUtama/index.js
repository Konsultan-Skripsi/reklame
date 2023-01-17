import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView,} from 'react-native';

const HalamanUtama = ({ navigation }) => {
    return (
      <ScrollView style={styles.hal}>
      <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.h3}>SISTEM INFORMASI PERIZINAN</Text>
        <Text style={styles.h3}>PERIZINAN DAN PEMETAAN</Text>
        <Text style={styles.h3}>REKLAME</Text>
        
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
      </View>
      </SafeAreaView>
      </ScrollView>
    );
}

export default HalamanUtama;

const styles = StyleSheet.create({
  hal: {
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 30
    // justifyContent: 'center',
  },
  h3: {
    fontSize: 24,
  },
  conbutton: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30
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