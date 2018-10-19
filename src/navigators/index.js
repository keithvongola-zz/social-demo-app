import { createStackNavigator } from 'react-navigation';
import { Users, UserDetail } from '../pages/Users';
import { Albums, Album, Photo } from '../pages/Album';
import { PostDetail } from '../pages/Post';
import { Todos, TodoDetail } from '../pages/Todo';

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
      title: 'Album',
    }),
  },
  Album: {
    screen: Album,
    navigationOptions: () => ({
      title: 'Album',
    }),
  },
  Photo: {
    screen: Photo,
    navigationOptions: () => ({
      title: 'Photo',
    }),
  },
  PostDetail: {
    screen: PostDetail,
    navigationOptions: () => ({
      title: 'Post Detail',
    }),
  },
  Todos: {
    screen: Todos,
    navigationOptions: () => ({
      title: 'Todos',
    }),
  },
  TodoDetail: {
    screen: TodoDetail,
    navigationOptions: () => ({
      title: 'Todo Detail',
    }),
  },
};

const StackNavigatorConfig = {
  headerBackTitleVisible: false,
  navigationOptions: () => ({
    headerBackTitle: null,
  }),
};

export default createStackNavigator(
  routeConfigs,
  StackNavigatorConfig,
);
