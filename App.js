import React, {Component} from 'react';
import Login from './src/page/login/login';
import Dashboard from './src/page/dashboard/dashboard';
import Kantor from './src/page/kantorpolisi/kantorpolisi';
import Laporan from './src/page/masterlaporan/masterlaporan';
import 'react-native-gesture-handler';
import MainNavigation from './src/navigation/navigation';
import Profil from './src/page/profile/profile';
import Report from './src/page/report/report';
import Chat from './src/page/chat/chat';
import Register from './src/page/register/register';

class App extends Component {
  render() {
    return <MainNavigation />;
  }
}
export default App;
