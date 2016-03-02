'use strict';

import React, {
  Component,
  ListView
} from 'react-native';

import styles from './styles.js';
import TodoCategoryItem from './TodoCategoryItem.js';

class TodoCategoryList extends Component {

  constructor(props) {
    super(props);
  }

  renderTodoCategory(todoCategory) {
    console.log('item', todoCategory);
    return (
     <TodoCategoryItem todoCategory={todoCategory} /> 
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
      <ListView
      dataSource={clonedList}
      renderRow={this.renderTodoCategory} />
    );
  }

}

module.exports = TodoCategoryList;
