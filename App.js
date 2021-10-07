import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import allReducers from './app/reducers/'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import Login from './app/screens/Login'
import Typing from './app/screens/Typing'
import Result from './app/screens/Result'

export default function App() {
  const store = createStore(allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  const Stack = createNativeStackNavigator()

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" >
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Typing" component={Typing}
            options={{ headerLeft: () => { return false } }} />
          <Stack.Screen name="Result" component={Result} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}


// import { persistStore } from 'redux-persist'
// import { PersistGate } from 'redux-persist/integration/react'

//   const persistor = persistStore(store)

{/*<Provider store={store}>
  <PersistGate persistor={persistor}>
  </PersistGate>
</Provider>*/}