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
      color: '#242424',
      marginBottom: 15,
      marginTop: 15,
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    listItem: {
      padding: 25,
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#d1d1d1'
    }
  })

}
