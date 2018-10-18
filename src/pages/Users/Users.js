import React, { PureComponent } from 'react';
import {
  View, Text, SafeAreaView, Button,
} from 'react-native';

class Users extends PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          <Button
            title="To user detail"
            onPress={() => this.props.navigation.navigate('UserDetail')}
          />
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
export default Users;
