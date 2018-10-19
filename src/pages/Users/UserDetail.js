import React, { PureComponent } from 'react';
import {
  View, SafeAreaView, Button, Text, FlatList, ScrollView, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { PostItem } from '../../components';
import Albums from '../Album/Albums';
import { fonts } from '../../styles';

export default class UserDetail extends PureComponent {
  componentDidMount() {
    const {
      getPosts, getAlbums, getTodos, navigation,
    } = this.props;

    const userId = navigation.getParam('id');
    getPosts(userId);
    getAlbums(userId);
    getTodos(userId);

    this._renderPostItem = this._renderPostItem.bind(this);
    this._onPostPress = this._onPostPress.bind(this);
  }

  _onPostPress(id) {
    const { navigation } = this.props;
    navigation.navigate('PostDetail', { id });
  }

  _renderPostItem({ item, index }) {
    return (
      <PostItem
        id={item.get('id')}
        title={item.get('title')}
        body={item.get('body')}
        onPress={this._onPostPress}
      />
    );
  }

  _keyExtractor(item, index) {
    return `${index}::${item.get('id')}`;
  }

  render() {
    const {
      user, albums, posts, navigation,
    } = this.props;

    return (
      <SafeAreaView style={styles.safe}>
        <ScrollView style={styles.container}>
          <View style={styles.infoContainer}>
            <Text>{user.get('name')}</Text>
            <Text>{user.get('phone')}</Text>
            <Text>{user.get('email')}</Text>
            <Text>{user.get('website')}</Text>
            <Button
              title="To Todos"
              onPress={() => navigation.navigate('Todos')}
            />
          </View>
          {
            albums.size > 0
              ? <Text style={styles.title}>Albums</Text>
              : null
          }
          <Albums
            albums={albums}
            navigation={navigation}
          />
          {
            posts.size > 0
              ? <Text style={styles.title}>Posts</Text>
              : null
          }
          <FlatList
            data={posts.toArray()}
            renderItem={this._renderPostItem}
            keyExtractor={this._keyExtractor}
          />
        </ScrollView>
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
  },
  infoContainer: {
    backgroundColor: 'white',
  },
  title: {
    fontSize: fonts.bigger,
    fontWeight: fonts.bolder,
  },
  text: {

  },
});

UserDetail.propTypes = {
  getPosts: PropTypes.func.isRequired,
  getAlbums: PropTypes.func.isRequired,
  getTodos: PropTypes.func.isRequired,
};
