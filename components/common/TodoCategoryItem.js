'use strict';

import React, {
  Component,
  View,
  Text
} from 'react-native';

import styles from './styles.js';

class TodoCategoryItem extends Component {

  constructor(props) {
    console.log('props', props);
    super(props);
  }

  render() {
    console.log('category item', this.props)
    return (
      <View style={styles.appStyles.todoCategory}>
        <Text>{this.props.todoCategory.title}</Text>
      </View>
    );

  }

}

module.exports = TodoCategoryItem;
