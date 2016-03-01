'use strict';
import React, {
  AppRegistry,
  Component
} from 'react-native';

import TodoApp from './components/TodoApp.js';

class reactNativeTodo extends Component {
  render() {
    return (
        <TodoApp />
    );
  }
}

AppRegistry.registerComponent('reactNativeTodo', () => reactNativeTodo);
