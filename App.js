
import React from 'react';
// import Router from './src/router';
import HalamanUtama from './src/pages/HalamanUtama';
import Laporan from './src/pages/Laporan';
import Login from './src/pages/Login';
import Daftar from './src/pages/Daftar';
import Menu from './src/pages/Menu';
import Perizinan from './src/pages/Perizinan';
import Cek from './src/pages/Cek';
import MapRek from './src/pages/MapRek';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="HalamanUtama">
    <Stack.Screen 
    name="HalamanUtama" 
    component={HalamanUtama} 
    options={{ headerShown: false}}
    />
    <Stack.Screen name="Laporan" component={Laporan} 
    options={{ headerShown: false }} />
    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    <Stack.Screen name="Daftar" component={Daftar} options={{ title: 'Back' }} />
    <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
    <Stack.Screen name="Perizinan" component={Perizinan} options={{ title: 'Back' }} />
    <Stack.Screen name="Cek" component={Cek} options={{ title: 'Back' }} />
    <Stack.Screen name="MapRek" component={MapRek} options={{ title: 'Back' }} />
    </Stack.Navigator>
    </NavigationContainer>
    // <Router />
  );
}

export default App;