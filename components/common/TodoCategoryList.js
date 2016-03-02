'use strict';

import React, {
  Component,
  ListView,
  View,
  Text
} from 'react-native';

import styles from './styles.js';

class TodoCategoryList extends Component {

  constructor(props) {
    super(props);
  }

  renderTodoCategory(todoCategory) {
    console.log('item', todoCategory);
    return (
      <View style={styles.appStyles.todoCategory}>
        <Text>{todoCategory.title}</Text>
      </View>
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
      <View style={{ flex:1 }}>
      <ListView
      dataSource={clonedList}
      renderRow={this.renderTodoCategory} />
      </View>
    );
  }

}

module.exports = TodoCategoryList;
