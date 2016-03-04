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

class TodoCategoryList extends Component {

  constructor(props) {
    super(props);
  }

  categoryItemPressed(category) {
    // Navigate to category entries
    console.log('Navigating to category', category);
  }

  renderTodoCategory(todoCategory) {
    console.log('item', todoCategory);
    return (
      <TouchableHighlight onPress={this.categoryItemPressed.bind(this, todoCategory)}>
        <View>
          <TodoCategoryItem todoCategory={todoCategory} />
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    var list = [
      { title: 'title 1', description: 'title 1 description', lastUpdated: new Date() },
      { title: 'title 1', description: 'title 1 description', lastUpdated: new Date() },
      { title: 'title 1', description: 'title 1 description', lastUpdated: new Date() },
      { title: 'title 1', description: 'title 1 description', lastUpdated: new Date() },
      { title: 'title 1', description: 'title 1 description', lastUpdated: new Date() }
    ];

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    var clonedList = ds.cloneWithRows(list);

    return (
      <View>
        <Text style={styles.appStyles.welcome}>React Todo Application</Text>
        <ListView
          dataSource={clonedList}
          renderRow={this.renderTodoCategory.bind(this)} />
      </View>
    );
  }

}

module.exports = TodoCategoryList;
