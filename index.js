import React from 'react';
import { AppRegistry } from 'react-native';
// import './index.css';
import App from './App';
import { createStore } from 'redux'
import allReducers from './reducers'
import { persistStore } from 'redux-persist'
import { name as appName } from './app.json'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const store = createStore(allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const persistor = persistStore(store)

const RNLoginRedux = () =>
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>

AppRegistry.registerComponent(appName, () => RNLoginRedux)