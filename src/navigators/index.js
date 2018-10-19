import { createStackNavigator } from 'react-navigation';
import { Users, UserDetail } from '../pages/Users';
import { Albums, Album, Photo } from '../pages/Album';
import { PostDetail } from '../pages/Post';
import { Todos } from '../pages/Todo';
import WebPage from '../pages/WebPage';

const routeConfigs = {
  Users: {
    screen: Users,
    navigationOptions: () => ({
      title: 'Users',
    }),
  },
  UserDetail: {
    screen: UserDetail,
    navigationOptions: ({ navigation }) => ({
      title: navigation.getParam('name', 'User detail'),
    }),
  },
  Albums: {
    screen: Albums,
    navigationOptions: () => ({
      title: 'Albums',
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
      title: 'Comments',
    }),
  },
  Todos: {
    screen: Todos,
    navigationOptions: () => ({
      title: 'Todos',
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
