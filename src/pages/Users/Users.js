import React, { PureComponent } from 'react';
import {
  View, SafeAreaView, Button,
} from 'react-native';
import { connect } from 'react-redux';
import {
  getUsers,
} from '../../actions/data';

class Users extends PureComponent {
  componentDidMount() {
    this.props.getUsers();
  }

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

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers()),
});

export default connect(null, mapDispatchToProps)(Users);
