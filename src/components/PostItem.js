import React, { PureComponent } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

class PostItem extends PureComponent {
  constructor(props) {
    super(props);
    this._onPress = this._onPress.bind(this);
  }

  _onPress() {
    const { id, onPress } = this.props;
    onPress(id);
  }

  render() {
    const { title, body } = this.props;
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View style={styles.container}>
          <Text
            style={styles.title}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {title}
          </Text>
          <Text
            style={styles.body}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {body}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 8,
    marginBottom: 4,
  },
  title: {

  },
  body: {

  },
});

PostItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export { PostItem };
