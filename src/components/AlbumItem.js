import React, { PureComponent } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, Image, Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

const itemWidth = Dimensions.get('window').width / 3;
class AlbumItem extends PureComponent {
  constructor(props) {
    super(props);
    this._onPress = this._onPress.bind(this);
  }

  _onPress() {
    const {
      id,
      isPlaceholder,
      onPress,
      onPlaceholderPress,
      title,
      url,
    } = this.props;
    if (isPlaceholder) onPlaceholderPress();
    else if (url) onPress(title, url);
    else onPress(id);
  }

  render() {
    const { title, thumbnailUrl, hideTitle } = this.props;
    return (
      <TouchableOpacity
        style={styles.touchable}
        onPress={this._onPress}
      >
        <View style={styles.container}>
          {
             thumbnailUrl
               ? (
                 <Image
                   source={{ uri: thumbnailUrl }}
                   style={styles.thumbnail}
                 />
               )
               : <View style={styles.thumbnail} />
          }
          {
            title && !hideTitle ? (
              <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
              </View>
            ) : null
          }
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  touchable: {
    height: itemWidth,
    width: itemWidth,
  },
  container: {
    backgroundColor: 'white',
  },
  textContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 8,
  },
  title: {
    textAlign: 'center',
    fontSize: 10,
  },
  thumbnail: {
    height: itemWidth,
    width: itemWidth,
    backgroundColor: 'white',
  },
});

AlbumItem.propTypes = {
  id: PropTypes.number.isRequired,
  isPlaceholder: PropTypes.bool,
  hideTitle: PropTypes.bool,
  title: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  url: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  onPlaceholderPress: PropTypes.func,
};

AlbumItem.defaultProps = {
  isPlaceholder: false,
  hideTitle: false,
  title: null,
  thumbnailUrl: null,
  url: null,
  onPlaceholderPress: () => {},
};

export { AlbumItem };
