'use strict';
import {
  StyleSheet
} from 'react-native';

module.exports = {

  appStyles: StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      color: 'red',
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    todoCategory: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: 'gray'
    }
  })

}
