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
  on: {
    backgroundColor: 'green',
  },
  off: {
    backgroundColor: 'red',
  },
  text: {
    fontSize: 25,
    minWidth: 90,
    fontFamily: 'Oxygen Mono'
  }
});

export default class Timer extends React.Component {
  state = {
    isOn: false,
    formattedTime: '00:00',
    start: 0,
    time: 0,
    previousTime: 0,
    current: 0
  };
  componentDidUpdate = () => {
    if (this.props.isMainOn === false && this.state.isOn === true) {
      this.handleTimer()
    }
  }

  handleTimer() {
    if (this.state.isOn === true) {
      if (this.props.isMainOnHandler) {
        this.props.isMainOnHandler(false)
      }
      this.setState({
        isOn: false,
        previousTime: this.state.time
      });
      clearInterval(this.timer)
    } else {
      if (this.props.isMainOnHandler) {
        this.props.isMainOnHandler(true)
      }
      this.setState({
        isOn: true,
        start: Date.now() - this.state.time,
        current: Date.now()
      })
      this.timer = setInterval(() => {
        let current = Date.now() - this.state.current
        let seconds = Math.floor((Date.now() - this.state.start) / 1000)
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
        let formattedTime = minutes + ':' + seconds
        this.setState({
          time: current + this.state.previousTime,
          formattedTime: formattedTime
        })
      }, 10);
    }
  }
  render() {
    return (
      <Button
        style={[styles.button, this.state.isOn ? styles.on : styles.off]}
        id='button'
        onPress={this.props.isMainOn ? () => this.handleTimer() : null}>
        <Text style={styles.text}>{this.props.id}</Text>
        <Text style={styles.text}>{this.state.formattedTime.toString()}</Text>
      </Button>
    );
  }
}
