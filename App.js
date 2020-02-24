import React, {Component} from 'react';
import Startup from './src/page/startup/startup';
import 'react-native-gesture-handler';
import MainNavigation from './src/navigation/navigation';

class App extends Component {
  render() {
    return <MainNavigation />;
  }
}
export default App;
