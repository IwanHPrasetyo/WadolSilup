import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import StartScreen from '../page/startup/startup';
import LoginScreen from '../page/login/login';

const MainNavigation = createStackNavigator(
  {StartScreen, LoginScreen},
  {headerMode: 'none', initialRouteKey: 'StartScreen'},
  {headerMode: 'none', initialRouteKey: 'LoginScreen'},
);

export default createAppContainer(MainNavigation);
