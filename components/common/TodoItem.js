'use strict';

import React, {
  Component,
  View,
  Text
} from 'react-native';

import styles from './styles.js';

class TodoItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.appStyles.listItem}>
        <Text>{this.props.todo.title}</Text>
      </View>
    );

  }

}

module.exports = TodoItem;
