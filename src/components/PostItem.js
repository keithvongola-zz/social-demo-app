import React, { PureComponent } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { colors, fonts, metrics } from '../styles';

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
    const {
      title, body, onPress, numberOfLines,
    } = this.props;
    return (
      <TouchableOpacity onPress={this._onPress} disabled={!onPress}>
        <View style={styles.container}>
          <Text style={styles.title}>
            {title}
          </Text>
          <Text
            style={styles.body}
            numberOfLines={numberOfLines}
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
    backgroundColor: colors.white,
    paddingHorizontal: metrics.H_PADDING,
    paddingVertical: metrics.V_PADDING,
    marginBottom: 4,
  },
  title: {
    fontSize: fonts.big,
    fontWeight: fonts.bold,
    marginBottom: 4,
  },
  body: {
    fontSize: fonts.regular,
    fontWeight: fonts.normal,
  },
});

PostItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  numberOfLines: PropTypes.number,
};

PostItem.defaultProps = {
  onPress: null,
  numberOfLines: null,
};

export { PostItem };
