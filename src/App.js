import React from 'react';
import Timer from 'src/Components/Timer/Timer.js';
import Display from 'src/Components/Display/Display.js';
import { Text, View, StyleSheet } from 'react-native';
import NavBar from 'src/Components/Nav/NavBar.js';

const styles = StyleSheet.create({
  app: {
    backgroundColor: 'snow',
    alignItems: 'center',
    padding: 10,
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'column',
    fontFamily: 'Ubuntu Mono'
  },
  View: {
    backgroundColor: 'snow',
    alignItems: 'center',
    padding: 10,
    flex: 2,
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  row: {
    width: '100%',
    marginTop: 30,
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
});

export default class App extends React.Component {
  state = {
    isMainOn: false
  };

  isMainOnHandler = state => {
    this.setState({
      isMainOn: state
    });
  };

  render() {
    return (
      <View style={styles.app}>
        <NavBar>
          <Display
            isMainOnHandler={this.isMainOnHandler}
            isMainOn={this.state.isMainOn}
            main={true}
            id="main"
          />
          <View style={styles.View}>
            <View class="row" style={styles.row}>
              <Timer isMainOn={this.state.isMainOn} id="1" />
              <Timer isMainOn={this.state.isMainOn} id="2" />
              <Timer isMainOn={this.state.isMainOn} id="3" />
            </View>
            <View class="row" style={styles.row}>
              <Timer isMainOn={this.state.isMainOn} id="4" />
              <Timer isMainOn={this.state.isMainOn} id="5" />
              <Timer isMainOn={this.state.isMainOn} id="6" />
            </View>
            <View class="row" style={styles.row}>
              <Timer isMainOn={this.state.isMainOn} id="7" />
              <Timer isMainOn={this.state.isMainOn} id="8" />
              <Timer isMainOn={this.state.isMainOn} id="9" />
            </View>
          </View>
        </NavBar>
      </View>
    );
  }
}
