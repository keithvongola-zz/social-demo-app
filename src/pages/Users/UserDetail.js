import React, { PureComponent } from 'react';
import {
  View, SafeAreaView, Button, Text, FlatList, ScrollView, StyleSheet, Linking,
} from 'react-native';
import PropTypes from 'prop-types';
import { PostItem, InfoRow } from '../../components';
import Albums from '../Album/Albums';
import { fonts, metrics, colors } from '../../styles';
import {
  icPhone, icWebsite, icLocation, icEmail,
} from '../../images';

export default class UserDetail extends PureComponent {
  componentDidMount() {
    const {
      getPosts, getAlbums, getTodos, navigation,
    } = this.props;

    const userId = navigation.getParam('id');
    getPosts(userId);
    getAlbums(userId);
    getTodos(userId);

    this._renderPostItem = this._renderPostItem.bind(this);
    this._onPostPress = this._onPostPress.bind(this);
    this._onEmailPress = this._onEmailPress.bind(this);
    this._onPhoneNumberPress = this._onPhoneNumberPress.bind(this);
    this._onWebsitePress = this._onWebsitePress.bind(this);
    this._onAddressPress = this._onAddressPress.bind(this);
  }

  _onEmailPress() {
    const { user } = this.props;
    const url = `mailto:${user.get('email')}`;

    Linking.canOpenURL(url).then((supported) => {
      if (!supported) {
        console.log(`Can't handle url: ${url}`);
      } else {
        return Linking.openURL(url);
      }
    }).catch(err => console.error('An error occurred', err));
  }

  _onPhoneNumberPress() {
    const { user } = this.props;
    const url = `tel:${user.get('phone')}`;

    Linking.canOpenURL(url).then((supported) => {
      if (!supported) {
        console.log(`Can't handle url: ${url}`);
      } else {
        return Linking.openURL(url);
      }
    }).catch(err => console.error('An error occurred', err));
  }

  _onWebsitePress() {
    const { user, navigation } = this.props;
    const url = `https://${user.get('website')}`;
    navigation.navigate('WebPage', { url, title: 'Website' });
  }

  _onAddressPress() {
    const { user, navigation } = this.props;
    const geo = user.getIn(['address', 'geo']);
    const url = `https://www.google.com/maps/search/?api=1&query=${geo.get('lat')},${geo.get('lng')}`;

    navigation.navigate('WebPage', { url, title: 'Address' });
  }

  _onPostPress(id) {
    const { navigation } = this.props;
    navigation.navigate('PostDetail', { id });
  }

  _renderPostItem({ item, index }) {
    return (
      <PostItem
        id={item.get('id')}
        title={item.get('title')}
        body={item.get('body')}
        onPress={this._onPostPress}
      />
    );
  }

  _keyExtractor(item, index) {
    return `${index}::${item.get('id')}`;
  }

  render() {
    const {
      user, albums, posts, navigation,
    } = this.props;

    let address = user.getIn(['address', 'suite']);
    address += `, ${user.getIn(['address', 'street'])}`;
    address += `, ${user.getIn(['address', 'city'])}`;

    return (
      <SafeAreaView style={styles.safe}>
        <ScrollView style={styles.container}>
          <View style={styles.infoContainer}>
            <InfoRow
              icon={icPhone}
              field="Phone"
              value={user.get('phone')}
              onPress={this._onPhoneNumberPress}
            />
            <InfoRow
              icon={icEmail}
              field="Email"
              value={user.get('email')}
              onPress={this._onEmailPress}
            />
            <InfoRow
              icon={icWebsite}
              field="Website"
              value={user.get('website')}
              onPress={this._onWebsitePress}
            />
            <InfoRow
              icon={icLocation}
              field="Address"
              value={address}
              onPress={this._onAddressPress}
            />
            <Button
              title="To Todos"
              onPress={() => navigation.navigate('Todos')}
            />
          </View>
          {
            albums.size > 0
              ? <Text style={styles.title}>Albums</Text>
              : null
          }
          <Albums
            albums={albums}
            navigation={navigation}
          />
          {
            posts.size > 0
              ? <Text style={styles.title}>Posts</Text>
              : null
          }
          <FlatList
            data={posts.toArray()}
            renderItem={this._renderPostItem}
            keyExtractor={this._keyExtractor}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },
  infoContainer: {
    backgroundColor: colors.white,
  },
  title: {
    backgroundColor: colors.white,
    marginTop: 8,
    paddingVertical: 8,
    paddingLeft: metrics.H_PADDING,
    fontSize: fonts.bigger,
    fontWeight: fonts.bolder,
  },
  text: {

  },
});

UserDetail.propTypes = {
  getPosts: PropTypes.func.isRequired,
  getAlbums: PropTypes.func.isRequired,
  getTodos: PropTypes.func.isRequired,
};
