import React, { Component } from 'react';
import { View } from 'react-native';

import { Container, NavbarComponent } from 'navbar-native';

class Navbar extends Component {
  render() {
    return (
      <Container>
        <NavbarComponent
          title={'Navbar Native'}
          left={{
            icon: 'ios-arrow-back',
            label: 'Back',
            onPress: () => {
              alert('Go back!');
            }
          }}
          right={[
            {
              icon: 'ios-search',
              onPress: () => {
                alert('Search!');
              }
            },
            {
              icon: 'ios-menu',
              onPress: () => {
                alert('Toggle menu!');
              }
            }
          ]}
        />
        {props.children}
      </Container>
    );
  }
}

export default Navbar;
