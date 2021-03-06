import React from 'react';
import Button from 'src/Components/Button/Button.js'
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  display: {
    flex: 1,
    marginTop: 50,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 30,
    width: '100%',
    height: '33%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'black',
    color: '#e57373',
    padding: 30,
    textAlign: 'justify'
  },
  off: {
    backgroundColor: '#ffd6d6',
  },
  on: {
    backgroundColor: '#d6ffef',
  },
  number: {
    fontSize: 70,
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
    if (!this.props.isMainOn && this.state.isOn) {
      this.handleTimer()
    }
  }

  handleTimer() {
    if (this.state.isOn) {
      if (this.props.isMainOnHandler && this.props.main) {
        this.props.isMainOnHandler(false)
      }
      this.setState({
        isOn: false,
        previousTime: this.state.time
      });
      clearInterval(this.timer)
    } else {
      if (this.props.isMainOnHandler && this.props.main) {
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
        style={[styles.display, this.state.isOn ? styles.on : styles.off]}
        id='button'
        onPress={this.props.isMainOn || this.props.main ? () => this.handleTimer() : null}>
        <Text style={styles.text}>{this.props.id} {"\n"}</Text>
        <Text style={styles.number}>{this.state.formattedTime.toString()}</Text>
      </Button>
    );
  }
}
