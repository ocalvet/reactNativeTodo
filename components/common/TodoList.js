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
import TodoItem from './TodoItem.js';

class TodoList extends Component {

  constructor(props) {
    super(props);
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

    this.state = {
      todoList: clonedList
    };
  }

  todoItemPress(todo) {
    console.log('Todo done', todo);
  }

  renderTodoItem(todo) {
    return (
      <TouchableHighlight onPress={this.todoItemPress.bind(this, todo)}>
        <View>
          <TodoItem todo={todo} />
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start'
        }}>
        <ListView
          dataSource={this.state.todoList}
          renderRow={this.renderTodoItem.bind(this)} />
      </View>
    );
  }
}

module.exports = TodoList;
