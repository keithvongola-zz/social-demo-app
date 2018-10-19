import React, { PureComponent } from 'react';
import {
  View, SafeAreaView, Button, Text, FlatList, ScrollView, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { AlbumItem, PostItem } from '../../components';
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

    this._renderAlbumItem = this._renderAlbumItem.bind(this);
    this._onAlbumPress = this._onAlbumPress.bind(this);
    this._onMoreAlbumPress = this._onMoreAlbumPress.bind(this);
    this._renderPostItem = this._renderPostItem.bind(this);
    this._onPostPress = this._onPostPress.bind(this);
  }

  _onAlbumPress(id) {
    const { navigation } = this.props;
    navigation.navigate('Photo', { id });
  }

  _onMoreAlbumPress() {
    const { navigation } = this.props;
    navigation.navigate('Albums');
  }

  _onPostPress(id) {
    const { navigation } = this.props;
    navigation.navigate('PostDetail', { id });
  }

  _renderAlbumItem({ item, index }) {
    return (
      <AlbumItem
        isPlaceholder={item.get('isPlaceholder') || false}
        id={item.get('id')}
        title={item.get('title')}
        thumbnailUrl={item.get('thumbnailUrl')}
        onPress={this._onAlbumPress}
        onPlaceholderPress={this._onMoreAlbumPress}
      />
    );
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
    const { user, albums, posts } = this.props;

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
              onPress={() => this.props.navigation.navigate('Todos')}
            />
          </View>
          {
            albums.size > 0
              ? <Text style={styles.title}>Albums</Text>
              : null
          }
          <FlatList
            numColumns={3}
            data={albums.toArray()}
            renderItem={this._renderAlbumItem}
            keyExtractor={this._keyExtractor}
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
