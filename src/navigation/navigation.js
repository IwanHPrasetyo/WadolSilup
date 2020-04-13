import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import StartScreen from '../page/startup/startup';
import LoginScreen from '../page/login/login';
import DashboardScreen from '../page/dashboard/dashboard';

const MainNavigation = createStackNavigator(
  {StartScreen, LoginScreen, DashboardScreen},
  {headerMode: 'none', initialRouteKey: 'StartScreen'},
  {headerMode: 'none', initialRouteKey: 'LoginScreen'},
  {headerMode: 'none', initialRouteKey: 'DashboardScreen'},
);

export default createAppContainer(MainNavigation);
