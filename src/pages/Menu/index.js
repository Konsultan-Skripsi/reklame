import React from 'react';
import { SafeAreaView ,StyleSheet, View, ScrollView, Image, TouchableOpacity, Text} from 'react-native';

 const Menu = ({ route, navigation }) => {

  const itemId = route.params.itemId;
  // console.log(itemId);

    return (
      <ScrollView>
      <SafeAreaView>
      <View style={styles.container}>
      
      <Image
        style={styles.img}
      />

      <View style={styles.conbutton}>
        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Perizinan', {data:route.params}) }
        >
        <Text style={styles.textbutton}>Ajukan Perizinan</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Cek') }
        >
        <Text style={styles.textbutton}>Cek Perizinan</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MapRek') }
        >
        <Text style={styles.textbutton}>Map Reklame</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('HalamanUtama') }
        >
        <Text style={styles.textbutton}>Keluar</Text>
        </TouchableOpacity>
      </View>

      </View>

      </SafeAreaView>
      </ScrollView>
    );
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 30
    // justifyContent: 'center',
  },
  conbutton: {
    flex: 1,
    // backgroundColor: 'blue',
    alignItems: 'center',
    marginTop: 20
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
  img: {
    width: 66,
    height: 58,
  }
});

export default Menu;
