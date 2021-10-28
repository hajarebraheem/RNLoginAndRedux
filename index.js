import { AppRegistry } from "react-native";
import React from "react";
import App from "./App";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./connect";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "./store";

const { store, persistor } = configureStore();
// const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

const RNLoginAndRedux = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNLoginAndRedux);
