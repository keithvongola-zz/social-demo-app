import { createStackNavigator } from 'react-navigation';
import { Users, UserDetail } from '../pages/Users';
import { Album, Photo } from '../pages/Album';
import { Posts, PostDetail } from '../pages/Post';
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
    navigationOptions: () => ({
      title: 'User Detail',
    }),
  },
  Albums: {
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
  Posts: {
    screen: Posts,
    navigationOptions: () => ({
      title: 'Post',
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

};

export default createStackNavigator(
  routeConfigs,
  StackNavigatorConfig,
);
