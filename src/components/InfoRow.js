import React from 'react';
import {
  View, Text, TouchableOpacity, Image, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { metrics, fonts } from '../styles';

const InfoRow = ({
  icon, field, value, onPress,
}) => (
  <View style={styles.container}>
    <Image
      style={styles.icon}
      source={icon}
    />
    <Text style={styles.field}>
      {`${field}: `}
    </Text>
    <TouchableOpacity
      style={styles.valueConatiner}
      onPress={onPress}
      disabled={!onPress}
    >
      <Text style={styles.value}>
        {value}
      </Text>
    </TouchableOpacity>
  </View>
);


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    minHeight: 24,
    alignItems: 'center',
    paddingHorizontal: metrics.H_PADDING,
    paddingVertical: metrics.V_PADDING,
  },
  icon: {
    height: 18,
    width: 18,
    marginRight: 8,
  },
  title: {

  },
  valueConatiner: {
    flex: 1,
  },
  value: {
    fontWeight: fonts.bold,
    color: '#007AFF',
  },
});

InfoRow.propTypes = {
  icon: PropTypes.number.isRequired,
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

InfoRow.defaultProps = {
  onPress: null,
};

export { InfoRow };
