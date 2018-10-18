import React from 'react';
import Timer from 'src/Components/Timer/Timer.js'
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  View: {
    backgroundColor: 'snow',
    alignItems: 'center',
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    fontFamily: 'Ubuntu Mono'
  },
  row: {
    margin: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
  }
});

export default class App extends React.Component {
  state = {
    isMainOn: false,
  }

  isMainOnHandler = (state) => {
    this.setState({
      isMainOn: state
    })
  }

  render() {
    return (
      <View style={
        styles.View
      }>
        <Timer isMainOnHandler={this.isMainOnHandler} isMainOn={true} id='main' />
        <View class='row' style={styles.row} >
          <Timer isMainOn={this.state.isMainOn} id='1' />
          <Timer isMainOn={this.state.isMainOn} id='2' />
          <Timer isMainOn={this.state.isMainOn} id='3' />
        </View>
      </View>
    );
  }
}
