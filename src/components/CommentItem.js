import React from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { colors, metrics, fonts } from '../styles';

const CommentItem = ({ email, title, body }) => (
  <View style={styles.container}>
    <Text style={styles.title}>
      {title}
    </Text>
    <Text style={styles.body}>
      {body}
    </Text>
    <Text style={styles.email}>
      {`${email}`}
    </Text>
  </View>
);


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingVertical: metrics.V_PADDING,
    paddingHorizontal: metrics.H_PADDING,
    marginBottom: 4,
  },
  title: {
    fontSize: fonts.big,
    fontWeight: fonts.bold,
  },
  body: {
    fontSize: fonts.regular,
    fontWeight: fonts.normal,
    marginVertical: 4,
  },
  email: {
    fontSize: fonts.small,
    fontWeight: fonts.normal,
    textAlign: 'right',
  },
});

CommentItem.propTypes = {
  email: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};


export { CommentItem };
