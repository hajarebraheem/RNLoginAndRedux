import React from 'react'
import { NativeRouter, Route } from "react-router-native"
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Login from './app/screens/Login'
import Typing from './app/screens/Typing'
import Result from './app/screens/Result'

export default function App() {
  console.log("From App.js")

  return (
    <>
      <NativeRouter>
        <Login />
        <Route exact path='/login' component={Login} />
        <Route path='/typing' component={Typing} />
        <Route path='/result' component={Result} />
      </NativeRouter>
    </>
  );
}

// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import allReducers from './app/reducers'
// import { persistStore } from 'redux-persist'
// import { PersistGate } from 'redux-persist/integration/react'
// import Show from './app/screens/Show'

//   const store = createStore(allReducers,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )

//   const persistor = persistStore(store)

{/*<Provider store={store}>
  <PersistGate persistor={persistor}>
  </PersistGate>
</Provider>*/}