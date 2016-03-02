'use strict';

import React, {
  Component,
  View,
  Text
} from 'react-native';

import styles from './styles.js';

class TodoCategoryList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.appStyles.container}>
      <Text style={styles.appStyles.welcome}>Hellow World!</Text>
      </View>

    )
  }

}

module.exports = TodoCategoryList;
