import React, { PureComponent } from 'react';
import {
  View, Text, SafeAreaView, Button,
} from 'react-native';

class UserDetail extends PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          <Button
            title="To Album"
            onPress={() => this.props.navigation.navigate('Album')}
          />
          <Button
            title="To Todos"
            onPress={() => this.props.navigation.navigate('Todos')}
          />
          <Button
            title="To Post"
            onPress={() => this.props.navigation.navigate('Posts')}
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
export default UserDetail;
