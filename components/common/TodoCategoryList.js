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

    this.firebaseRef = new Firebase('https://reactnatodo.firebaseio.com/');

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    var categoryList = this;

    this.firebaseRef.once('value')
      .then(function(snapshot) {
        var data = snapshot.val();
        console.log('data from firebase', data);

        var clonedList = ds.cloneWithRows(data);

        categoryList.setState({
          categoryList: clonedList
        });
      });

      var list = [
        { title: 'Category 1', description: 'title 1 description', lastUpdated: new Date() },
        { title: 'Category 2', description: 'title 1 description', lastUpdated: new Date() },
        { title: 'Category 3', description: 'title 1 description', lastUpdated: new Date() },
        { title: 'Category 4', description: 'title 1 description', lastUpdated: new Date() },
        { title: 'Category 5', description: 'title 1 description', lastUpdated: new Date() }
      ];


      var clonedList = ds.cloneWithRows([]);

      this.state = {
        categoryList: clonedList
      };
  }

  componentDidMount() {
    console.log('Se monto');
  }

  categoryItemPressed(category) {
    // Navigate to category entries
    this.props.navigator.push({
      component: TodoList,
      title: category.title
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
