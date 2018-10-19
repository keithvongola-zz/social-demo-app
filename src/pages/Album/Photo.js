import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { fonts, metrics, colors } from '../../styles';
import { imagePlaceholder } from '../../images';

const Photo = ({ navigation }) => {
  const uri = navigation.getParam('url');
  const title = navigation.getParam('title');

  return (
    <View style={styles.container}>
      <Image
        source={{ uri }}
        defaultSource={imagePlaceholder}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    backgroundColor: colors.black,
  },
  title: {
    position: 'absolute',
    color: colors.white,
    fontSize: fonts.smaller,
    left: metrics.H_PADDING,
    right: metrics.H_PADDING,
    top: metrics.V_PADDING,
    textAlign: 'center',
  },
});

export default withNavigation(Photo);
