'use strict';

import React, {
  Component,
  View,
  Text,
  TouchableHighlight,
  ListView
} from 'react-native';

import styles from './styles.js';
import TodoCategoryItem from './TodoCategoryItem.js';
import TodoList from './TodoList.js';
import Firebase from 'firebase';


class TodoCategoryList extends Component {

  constructor(props) {

    super(props);

    var categoryList = this;

    this.firebaseRef = new Firebase('https://reactnatodo.firebaseio.com/');

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.firebaseRef.once('value')
    .then(function(snapshot) {
      var data = snapshot.val();

      console.log('data from firebase', data);

      var clonedList = ds.cloneWithRows(data);

      categoryList.setState({
        categoryList: clonedList
      });
    })
    .catch(function(error) {
      console.log('Error:', error);
    });

    // Initialize empty datasource
    var clonedList = ds.cloneWithRows([]);

    this.state = {
      categoryList: clonedList
    };
  }

  categoryItemPressed(category) {
    // Navigate to category entries
    this.props.navigator.push({
      component: TodoList,
      selectedCategory: category
    });
  }

  renderTodoCategory(todoCategory) {
    return (
      <TouchableHighlight onPress={this.categoryItemPressed.bind(this, todoCategory)}>
        <View>
          <TodoCategoryItem todoCategory={todoCategory} />
        </View>
      </TouchableHighlight>
    );
  }

  render() {

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start'
        }}>
          <ListView
            dataSource={this.state.categoryList}
            renderRow={this.renderTodoCategory.bind(this)} />
      </View>
    );
  }

}

module.exports = TodoCategoryList;
