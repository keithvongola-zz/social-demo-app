import React from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const CommentItem = ({ email, title, body }) => (
  <View style={styles.container}>
    <Text style={styles.email}>
      {email}
    </Text>
    <Text style={styles.title}>
      {title}
    </Text>
    <Text style={styles.body}>
      {body}
    </Text>
  </View>
);


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 8,
    marginBottom: 4,
  },
  email: {

  },
  title: {

  },
  body: {

  },
});

CommentItem.propTypes = {
  email: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};


export { CommentItem };
