import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Question from "./Components/Question";

import BootstrapStyleSheet from 'react-native-bootstrap-styles';
const bootstrapStyleSheet = new BootstrapStyleSheet();
const s = bootstrapStyleSheet.create();
const c = bootstrapStyleSheet.constants;

export default class App extends React.Component {
  render() {
    return (
      <View style={[s.container, styles.container]}>
        <Question question="8+5=?" choices={[3, 4, 5]}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
