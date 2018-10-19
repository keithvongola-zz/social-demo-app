import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors, fonts } from '../styles';

const SplashScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Welcome</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: fonts.bigger,
    fontWeight: fonts.bolder,
    color: colors.white,
  },
});

export default SplashScreen;
