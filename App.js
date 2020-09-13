import React, {Component, useEffect} from 'react';
import Login from './src/page/login/login';
import Dashboard from './src/page/dashboard/dashboard';
import Kantor from './src/page/kantorpolisi/kantorpolisi';
import Laporan from './src/page/masterlaporan/masterlaporan';
import 'react-native-gesture-handler';
import {Root, Icon, Input, Text} from 'native-base';
import MainNavigation from './src/navigation/navigation';
import Profil from './src/page/profile/profile';
import Report from './src/page/report/report';
import Chat from './src/page/chat/chat';
import Register from './src/page/register/register';
import Maps from './src/page/maps/maps';
import ChatRoom from './src/page/chatRoom/chatRoom';
import CekKtp from './src/page/cekKTP/cekKTP';

const App = () => {
  useEffect(() => {
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
    Input.defaultProps = Input.defaultProps || {};
    Input.defaultProps.allowFontScaling = false;
    Icon.defaultProps = Input.defaultProps || {};
    Icon.defaultProps.allowFontScaling = false;
  }, []);

  return (
    <Root>
      <MainNavigation />
    </Root>
  );
};
export default App;
