import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './app/screens/Home';
import Login from './app/screens/Login';
import Show from './app/screens/Show'

const Stack = createNativeStackNavigator();
export default function App() {
  console.log("test");
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Show" component={Show} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
