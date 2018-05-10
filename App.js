
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar 
} from 'react-native';


import Routes from './src/Routes';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
           backgroundColor="#1c313a"
           barStyle="light-content"
         />
        <Routes/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
  }
});

/*import React, { Component } from 'react';
import { StyleSheet, Text, View,Button,Alert  } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello GCE Guys. we made it. First sample using React Native!</Text>
        
        <Button
  onPress={this._showAlert}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
      </View>
    );
  }

  _showAlert = () => {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/