import React, { PureComponent } from 'react';
import {
  View, SafeAreaView, FlatList, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { UserItem } from '../../components';
import { colors } from '../../styles';

export default class Users extends PureComponent {
  constructor(props) {
    super(props);

    this._renderItem = this._renderItem.bind(this);
    this._onUserPress = this._onUserPress.bind(this);
  }

  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }

  _onUserPress(id, name) {
    const { navigation } = this.props;
    navigation.navigate('UserDetail', { id, name });
  }

  _renderItem({ item }) {
    return (
      <UserItem
        id={item.get('id')}
        name={item.get('name')}
        email={item.get('email')}
        company={item.getIn(['company', 'name'])}
        onPress={this._onUserPress}
      />
    );
  }

  _keyExtractor(item, index) {
    return `${index}::${item.get('id')}`;
  }

  render() {
    const { users } = this.props;

    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          <FlatList
            data={users && users.toArray()}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },
});

Users.propTypes = {
  getUsers: PropTypes.func.isRequired,
  users: PropTypes.instanceOf(List).isRequired,
};
