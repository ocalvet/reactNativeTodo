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

  renderTodoItem(todo) {
    return (
      <Text>{todo.title}</Text>
    )
  }

  render() {
    var list = [
      { title: 'Todo Item 1', description: 'title 1 description', lastUpdated: new Date() },
      { title: 'Todo Item 2', description: 'title 1 description', lastUpdated: new Date() },
      { title: 'Todo Item 3', description: 'title 1 description', lastUpdated: new Date() },
      { title: 'Todo Item 4', description: 'title 1 description', lastUpdated: new Date() },
      { title: 'Todo Item 5', description: 'title 1 description', lastUpdated: new Date() },
      { title: 'Todo Item 6', description: 'title 1 description', lastUpdated: new Date() },
      { title: 'Todo Item 7', description: 'title 1 description', lastUpdated: new Date() },
      { title: 'Todo Item 8', description: 'title 1 description', lastUpdated: new Date() },
      { title: 'Todo Item 9', description: 'title 1 description', lastUpdated: new Date() },
      { title: 'Todo Item 10', description: 'title 1 description', lastUpdated: new Date() },
      { title: 'Todo Item 11', description: 'title 1 description', lastUpdated: new Date() },
      { title: 'Todo Item 12', description: 'title 1 description', lastUpdated: new Date() },
      { title: 'Todo Item 13', description: 'title 1 description', lastUpdated: new Date() },
      { title: 'Todo Item 14', description: 'title 1 description', lastUpdated: new Date() },
      { title: 'Todo Item 15', description: 'title 1 description', lastUpdated: new Date() }
    ];

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    var clonedList = ds.cloneWithRows(list);

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start'
        }}>
        <ListView
          dataSource={clonedList}
          renderRow={this.renderTodoItem.bind(this)} />
      </View>
    );
  }
}

module.exports = TodoList;
