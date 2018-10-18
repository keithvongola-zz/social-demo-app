import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors } from '../styles';

const SplashScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Splash Screen</Text>
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
    color: colors.white,
  },
});

export default SplashScreen;
