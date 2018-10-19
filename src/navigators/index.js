import { createStackNavigator } from 'react-navigation';
import { Users, UserDetail } from '../pages/Users';
import { Albums, Album, Photo } from '../pages/Album';
import { PostDetail } from '../pages/Post';
import { Todos } from '../pages/Todo';
import WebPage from '../pages/WebPage';
import strings from '../locales';

const routeConfigs = {
  Users: {
    screen: Users,
    navigationOptions: () => ({
      title: strings.title__users,
    }),
  },
  UserDetail: {
    screen: UserDetail,
    navigationOptions: ({ navigation }) => ({
      title: navigation.getParam('name', strings.title__users_detail),
    }),
  },
  Albums: {
    screen: Albums,
    navigationOptions: () => ({
      title: strings.title__albums,
    }),
  },
  Album: {
    screen: Album,
    navigationOptions: ({ navigation }) => ({
      title: navigation.getParam('title'),
    }),
  },
  Photo: {
    screen: Photo,
  },
  PostDetail: {
    screen: PostDetail,
    navigationOptions: () => ({
      title: strings.title__comments,
    }),
  },
  Todos: {
    screen: Todos,
    navigationOptions: () => ({
      title: strings.title__todos,
    }),
  },
  WebPage: {
    screen: WebPage,
    navigationOptions: ({ navigation }) => ({
      title: navigation.getParam('title', ''),
    }),
  },
};

const StackNavigatorConfig = {
  headerBackTitleVisible: false,
  navigationOptions: () => ({
    headerBackTitle: null,
    headerStyle: { borderBottomWidth: 0 },
  }),
};

export default createStackNavigator(
  routeConfigs,
  StackNavigatorConfig,
);
