import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import allReducers from './src/reducers'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import colors from './src/colors-config/colors'
import Login from './src/screens/Login'
import Typing from './src/screens/Typing'
import Result from './src/screens/Result'

export default function App() {
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  }

  const persistedReducer = persistReducer(persistConfig, allReducers)

  const store = createStore(persistedReducer)

  const persistor = persistStore(store)

  const Stack = createNativeStackNavigator()

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{headerTransparent: true, headerTintColor: colors.yellow}}>
            <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }} />
            
            <Stack.Screen
            name="Typing"
            component={Typing}
            options={{ headerLeft: () => { return false } }} />
            
            <Stack.Screen
            name="Result"
            component={Result} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}