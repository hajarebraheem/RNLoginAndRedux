import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './connect';
import colors from './src/colors-config/colors';
import Login from './src/screens/Login';
import Typing from './src/screens/Typing';
import Result from './src/screens/Result';
import { Text, View } from 'react-native';

export default function App(props) {
  const Stack = createNativeStackNavigator();
  console.log('-------------------');
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTransparent: true,
          headerTintColor: colors.yellow,
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
          initialParams={props}
        />

        <Stack.Screen
          name="Typing"
          component={Typing}
          options={{
            headerLeft: () => false,
          }}
        />

        <Stack.Screen
        name="Result"
        component={Result}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
