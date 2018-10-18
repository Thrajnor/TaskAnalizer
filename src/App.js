import React from 'react';
import Timer from 'src/Components/Timer/Timer.js'
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  View: {
    flexDirection: 'row',
    backgroundColor: 'snow',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    padding: 20
  }
});

export default class App extends React.Component {
  render() {
    return (
      <View style={
        styles.View
      }>
        <Timer />
        <Timer />
      </View>
    );
  }
}
