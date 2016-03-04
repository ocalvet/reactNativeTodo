'use strict';

import React, {
  Component,
  View,
  StatusBar,
  NavigatorIOS
} from 'react-native';

import TodoCategoryList from './common/TodoCategoryList.js';

class TodoApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var message = "hello";


    return (
      <View
        style={{
            flex: 1
          }}>
        <StatusBar hidden={true} />
        <NavigatorIOS
          style={{
            flex: 1
          }}
          initialRoute={{
            component: TodoCategoryList,
            title: 'Todos'
          }}
        />
      </View>
    );
  }

}

module.exports = TodoApp;
