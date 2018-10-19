import React, { PureComponent } from 'react';
import {
  FlatList,
  View,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { AlbumItem } from '../../components';

class Album extends PureComponent {
  constructor(props) {
    super(props);

    this._renderAlbumItem = this._renderAlbumItem.bind(this);
    this._onAlbumPress = this._onAlbumPress.bind(this);
    this._onMoreAlbumPress = this._onMoreAlbumPress.bind(this);
  }

  _onAlbumPress(id, title) {
    const { navigation } = this.props;
    navigation.navigate('Album', { id, title });
  }

  _onMoreAlbumPress() {
    const { navigation } = this.props;
    navigation.navigate('Albums');
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

  _keyExtractor(item, index) {
    return `${index}::${item.get('id')}`;
  }

  render() {
    const { albums } = this.props;

    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          <FlatList
            numColumns={3}
            data={albums && albums.toArray()}
            renderItem={this._renderAlbumItem}
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
  },
});

export default Album;
