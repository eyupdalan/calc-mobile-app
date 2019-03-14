import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from "react-redux";
import configureStore from "./redux/configureStore";
import Question from "./Components/Question";

import BootstrapStyleSheet from 'react-native-bootstrap-styles';
const bootstrapStyleSheet = new BootstrapStyleSheet();
const s = bootstrapStyleSheet.create();
const c = bootstrapStyleSheet.constants;

export default class App extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <View style={[s.container, styles.container]}>
          <Question question="9+7=?" choices={[3, 4, 5]}/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
