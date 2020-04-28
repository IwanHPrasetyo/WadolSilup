import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import StartScreen from '../page/startup/startup';
import LoginScreen from '../page/login/login';
import DashboardScreen from '../page/dashboard/dashboard';
import KantorPolisiScreen from '../page/kantorpolisi/kantorpolisi';

const MainNavigation = createStackNavigator(
  {StartScreen, LoginScreen, DashboardScreen, KantorPolisiScreen},
  {headerMode: 'none', initialRouteKey: 'StartScreen'},
  {headerMode: 'none', initialRouteKey: 'LoginScreen'},
  {headerMode: 'none', initialRouteKey: 'DashboardScreen'},
  {headerMode: 'none', initialRouteKey: 'KantorPolisiScreen'},
);

export default createAppContainer(MainNavigation);
