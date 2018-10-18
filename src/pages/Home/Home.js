import React, { PureComponent } from 'react';
import { View, Text, SafeAreaView } from 'react-native';

class Home extends PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          <Text style={styles.text}>Home</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = {
  safe: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {

  },
};
export default Home;
