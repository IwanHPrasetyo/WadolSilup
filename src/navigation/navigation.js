import {createStackNavigator} from 'react-navigation-stack';
import StartScreen from '../page/startup/startup';
import {createAppContainer} from 'react-navigation';

const MainNavigation = createStackNavigator(
  {
    StartScreen,
  },
  {headerMode: 'none', initialRouteKey: 'StartScreen'},
);

export default createAppContainer(MainNavigation);
