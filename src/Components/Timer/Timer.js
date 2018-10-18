import React from 'react';
import Button from 'src/Components/Button/Button.js'
import { Text, View } from 'react-native';
import { StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 30,
    minWidth: 110,
    alignItems: 'center',
    backgroundColor: 'red',
    borderColor: 'black',
    color: '#e57373',
    padding: 10
  },
  text: {
    fontSize: 25,
    minWidth: 90
  }
});

export default class Timer extends React.Component {
  state = {
    isOn: false,
    time: '00:00',
    start: 0,
  };

  handleTimer() {
    if (this.state.isOn === true) {
      this.setState({
        isOn: false,
        time: '00:00',
        start: 0,
      });
      clearInterval(this.timer)
    } else {
      this.setState({
        isOn: true,
        start: Date.now()
      })
      this.timer = setInterval(() => {
        let seconds = Math.floor((Date.now() - this.state.start) / 100)
        let minutes = Math.floor(seconds / 60)
        if (minutes >= 1) {
          seconds = seconds - (60 * minutes)
        }
        if (seconds < 1) {
          seconds = '00'
        } else if (seconds < 10) {
          seconds = '0' + seconds
        }
        if (minutes < 1) {
          minutes = '00'
        } else if (minutes < 10) {
          minutes = '0' + minutes
        }
        let time = minutes + ':' + seconds
        this.setState({
          time: time
        })
      }, 10);
    }
  }
  render() {
    return (
      <Button
        style={styles.button}
        id='button1'
        onPress={() => this.handleTimer()}>
        <Text style={styles.text}>{this.state.time.toString()}</Text>
      </Button>
    );
  }
}
