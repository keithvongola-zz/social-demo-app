import React, { PureComponent } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import { userThumbnail } from '../images';
import { metrics, fonts } from '../styles';

class UserItem extends PureComponent {
  constructor(props) {
    super(props);
    this._onPress = this._onPress.bind(this);
  }

  _onPress() {
    const { id, onPress } = this.props;
    onPress(id);
  }

  render() {
    const { name, email, company } = this.props;
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View style={styles.container}>
          <Image
            source={userThumbnail}
            style={styles.thumbnail}
            borderRadius={26}
          />
          <View style={styles.textContainer}>
            <Text style={styles.name}>
              {name}
              <Text style={styles.company}>{` (${company})`}</Text>
            </Text>
            <Text style={styles.email}>{email}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    minHeight: 64,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: metrics.H_PADDING,
    paddingVertical: metrics.V_PADDING,
    marginBottom: 4,
  },
  thumbnail: {
    height: 52,
    width: 52,
    backgroundColor: 'grey',
    marginRight: 8,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: fonts.big,
    fontWeight: fonts.bold,
  },
  company: {
    fontSize: fonts.regular,
    fontWeight: fonts.normal,

  },
  email: {
    fontSize: fonts.smaller,
  },
});

UserItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export { UserItem };
