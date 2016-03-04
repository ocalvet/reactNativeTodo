'use strict';

import React, {
  Component,
  View,
  Text,
  TouchableHighlight,
  ListView
} from 'react-native';

import styles from './styles.js';
import TodoListItem from './TodoCategoryItem.js';

class TodoList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          paddingTop: 80
        }}>
        <Text>Todo List</Text>
      </View>
    );
  }
}

module.exports = TodoList;
