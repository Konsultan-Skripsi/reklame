import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, Dimensions} from 'react-native';
import MapView from 'react-native-maps';
import { Marker, Callout } from 'react-native-maps';

const wilayah = [
        {
            latitude: -7.855107,
            longitude: 110.360607,
        },
        {
            latitude: -7.8366866,
            longitude: 110.3640525,
        },
        {
            latitude: -7.8565315,
            longitude: 110.3567433,
        }
];

const MapRek = () => {

    const [lokasi , setLokasi] = useState([]);
    // console.log(lokasi);
    // console.log(wilayah);

    useEffect (() => {
        fetch('https://wisgunkid.my.id/api/ambillatlng')
        .then(response => response.json())
        .then(result => {
            // console.log(result)
            let lok = [];
            result.forEach(el => {
                const lo = {
                latitude: parseFloat(el.latitude),
                longitude: parseFloat(el.longitude),
            };
                lok.push(lo);
            });
            setLokasi(lok);
        })
        .catch(error => alert(error))
    }, []);

    return(
        <ScrollView>

        <View style={styles.container}>
        <Text style={styles.h3}>Map Reklame</Text>
        <View style={styles.line}></View>
        </View>

        <View style={styles.boxmap}>
        <MapView style={styles.map}
        initialRegion={{
        latitude: -7.792556,
        longitude: 110.3763614,
        latitudeDelta: 0.0917,
        longitudeDelta: 0.0917,
        }}
        >
        {/* <Marker coordinate={wilayah} /> */}
        {/* <Marker coordinate={wilayah2} /> */}

        {/* {
            lokasi.map((wy,index) => {
                return <Marker key={index} coordinate={wy} />
            })
        } */}
        {
            wilayah.map((wy,index) => {
                return <Marker key={index} coordinate={wy} />
            })
        }
        </MapView>
        </View>
        </ScrollView>
    );
}

export default MapRek;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 10
    },
    h3: {
        fontSize: 18,
    },
    line: {
        width: 150,
        marginTop: 5,
        borderWidth: 1,
        borderColor: '#01030e',
    },
    boxmap: {
        flex: 1,
        alignItems: 'center',
        marginTop: 5,
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('screen').width - 10,
        height: Dimensions.get('screen').height - 125,
    },
});