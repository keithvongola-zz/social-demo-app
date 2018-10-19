import React, { PureComponent } from 'react';
import {
  View, Text, Image, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { boxChecked, boxUnchecked } from '../images';
import { colors, fonts, metrics } from '../styles';

class TodoItem extends PureComponent {
  render() {
    const {
      title, completed,
    } = this.props;
    return (
      <View style={styles.container}>
        <Image
          source={completed ? boxChecked : boxUnchecked}
          style={styles.checkbox}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>
            {title}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: metrics.H_PADDING,
    paddingVertical: metrics.V_PADDING,
    marginBottom: 4,
  },
  checkbox: {
    height: 24,
    width: 24,
    marginRight: 8,
  },
  title: {
    fontSize: fonts.big,
    fontWeight: fonts.bold,
    marginBottom: 4,
  },

});

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export { TodoItem };
