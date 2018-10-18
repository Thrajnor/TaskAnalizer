import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default button = (props) => {
  return (
    <TouchableOpacity
      style={props.style}
      id={props.id}
      onPress={props.onPress}>
      <Text>{props.children}</Text>
    </TouchableOpacity>
  );
}
