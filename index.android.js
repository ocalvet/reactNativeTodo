/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component
} from 'react-native';

class reactNativeTodo extends Component {
  render() {
    return (
        <TodoApp />
    );
  }
}

AppRegistry.registerComponent('reactNativeTodo', () => reactNativeTodo);
