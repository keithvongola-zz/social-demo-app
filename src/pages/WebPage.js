import React from 'react';
import {
  WebView, SafeAreaView, View, Text, StyleSheet,
} from 'react-native';
import { colors } from '../styles';

const WebPage = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <WebView
      source={{ uri: navigation.getParam('url') }}
      renderError={() => (
        <View style={styles.errorContainer}>
          <Text style={styles.error}>
            This site can’t be reached
          </Text>
        </View>
      )}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  error: {
    textAlign: 'center',
  },
});
export default WebPage;
