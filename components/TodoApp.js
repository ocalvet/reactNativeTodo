'use strict';

import React, {
  Component,
  View,
  StatusBar
} from 'react-native';

import TodoCategoryList from './common/TodoCategoryList.js';

class TodoApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var message = "hello";


    return (
      <View>
      <StatusBar hidden={true} />
      <TodoCategoryList />
      </View>
    );
  }

}

module.exports = TodoApp;
