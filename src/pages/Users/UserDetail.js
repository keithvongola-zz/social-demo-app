import React, { PureComponent } from 'react';
import {
  View, SafeAreaView, Text, FlatList, ScrollView, StyleSheet, Linking, ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import { Map, List } from 'immutable';
import { PostItem, InfoRow, Button } from '../../components';
import Albums from '../Album/Albums';
import { fonts, metrics, colors } from '../../styles';
import {
  icPhone, icWebsite, icLocation, icEmail, icTodos, icCompany,
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
    this._onTodosPress = this._onTodosPress.bind(this);
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

  _onTodosPress() {
    const { navigation } = this.props;
    navigation.navigate('Todos');
  }

  _onPostPress(id) {
    const { navigation } = this.props;
    navigation.navigate('PostDetail', { id });
  }

  _renderPostItem({ item }) {
    return (
      <PostItem
        id={item.get('id')}
        title={item.get('title')}
        body={item.get('body')}
        onPress={this._onPostPress}
        numberOfLines={2}
      />
    );
  }

  _keyExtractor(item, index) {
    return `${index}::${item.get('id')}`;
  }

  render() {
    const {
      user,
      albums,
      posts,
      navigation,
      loading,
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
            <InfoRow
              icon={icCompany}
              field="Company"
              value={user.getIn(['company', 'name'])}
              onPress={this._onWebsitePress}
            />
            <Button
              image={icTodos}
              text="Todos"
              onPress={this._onTodosPress}
            />
          </View>
          {
            loading
              ? (
                <ActivityIndicator
                  animating
                  size="large"
                  style={styles.activityIndicator}
                />
              )
              : (
                <View>
                  <Text style={styles.title}>Albums</Text>
                  <Albums
                    albums={albums}
                    navigation={navigation}
                  />
                  <Text style={styles.title}>Posts</Text>
                  <FlatList
                    data={posts.toArray()}
                    renderItem={this._renderPostItem}
                    keyExtractor={this._keyExtractor}
                  />
                </View>
              )
          }
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },
  infoContainer: {
    backgroundColor: colors.white,
  },
  activityIndicator: {
    marginTop: metrics.V_PADDING,
  },
  title: {
    backgroundColor: colors.white,
    marginTop: 8,
    paddingVertical: 8,
    paddingLeft: metrics.H_PADDING,
    fontSize: fonts.bigger,
    fontWeight: fonts.bolder,
  },
});

UserDetail.propTypes = {
  user: PropTypes.instanceOf(Map).isRequired,
  albums: PropTypes.instanceOf(List).isRequired,
  posts: PropTypes.instanceOf(List).isRequired,
  loading: PropTypes.bool.isRequired,
  getPosts: PropTypes.func.isRequired,
  getAlbums: PropTypes.func.isRequired,
  getTodos: PropTypes.func.isRequired,
};
