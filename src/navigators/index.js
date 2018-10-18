import { createBottomTabNavigator } from 'react-navigation';
import { Home } from '../pages/Home';

const routeConfigs = {
  Home: {
    screen: Home,
    navigationOptions: () => ({
      title: 'Home',
    }),
  },
};

const BottomTabNavigatorConfig = {

};

export default createBottomTabNavigator(routeConfigs, BottomTabNavigatorConfig);
