import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HalamanUtama } from "../pages";

const Stack = createNativeStackNavigator();

const Router = () => {
    <Stack.Navigator>
    <Stack.Screen name='HalamanUtama' component={HalamanUtama} />
    </Stack.Navigator>
}

export default Router;