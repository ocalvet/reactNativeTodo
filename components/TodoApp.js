'use strict';

import React, {
  Component
} from 'react-native';

import TodoCategoryList from './common/TodoCategoryList.js';

class TodoApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var message = "hello";


    return (
      <TodoCategoryList />
    );
  }

}

module.exports = TodoApp;
