import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from "react-redux";
import configureStore from "./redux/configureStore";
import Game from "./Components/Game";

import BootstrapStyleSheet from 'react-native-bootstrap-styles';
const bootstrapStyleSheet = new BootstrapStyleSheet();
const s = bootstrapStyleSheet.create();
const c = bootstrapStyleSheet.constants;

export default class App extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <View style={[s.container, styles.container]}>
          <Game/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    marginBottom: 100,
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch"
  }
});
