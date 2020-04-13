import React, {Component} from 'react';
import Login from './src/page/login/login';
import Dashboard from './src/page/dashboard/dashboard';
import 'react-native-gesture-handler';
import MainNavigation from './src/navigation/navigation';

class App extends Component {
  render() {
    return <Dashboard />;
  }
}
export default App;
