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

    console.log('props', props);

    var list = props.route.selectedCategory.todos;

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
