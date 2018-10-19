import React, { PureComponent } from 'react';
import {
  View, SafeAreaView, FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { TodoItem } from '../../components';
import { colors } from '../../styles';

class Todos extends PureComponent {
  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this);
  }

  _renderItem({ item }) {
    return (
      <TodoItem
        title={item.get('title')}
        completed={item.get('completed')}
      />
    );
  }

  _keyExtractor(item, index) {
    return `${index}::${item.get('id')}`;
  }

  render() {
    const { todos } = this.props;

    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          <FlatList
            data={todos && todos.toArray()}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = {
  safe: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
  },
};

Todos.propTypes = {
  todos: PropTypes.instanceOf(List).isRequired,
};

export default Todos;
