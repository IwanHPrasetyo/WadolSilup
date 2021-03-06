import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import StartScreen from '../page/startup/startup';
import LoginScreen from '../page/login/login';
import DashboardScreen from '../page/dashboard/dashboard';
import KantorPolisiScreen from '../page/kantorpolisi/kantorpolisi';
import MasterLaporanScreen from '../page/masterlaporan/masterlaporan';
import ProfileScreen from '../page/profile/profile';
import MapScreen from '../page/maps/maps';
import ChatScreen from '../page/chat/chat';
import ReportScreen from '../page/report/report';
import RegisterScreen from '../page/register/register';
import ChatRoomScreen from '../page/chatRoom/chatRoom';
import CekKTPScreen from '../page/cekKTP/cekKTP';
import MainChat from '../page/mainChat/mainChat';
import Kontak from '../page/kontak/kontak';

import {Icon, View} from 'native-base';

const TabNavigation = createMaterialBottomTabNavigator(
  {
    DashboardScreen: {
      screen: DashboardScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={{color: tintColor}} name="home" type="FontAwesome" />
          </View>
        ),
      },
    },
    RiwayatLaporan: {
      screen: MasterLaporanScreen,
      navigationOptions: {
        tabBarLabel: 'Riwayat Laporan',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon
              style={{color: tintColor, fontSize: 24}}
              name="codepen"
              type="FontAwesome"
            />
          </View>
        ),
      },
    },
  },
  {
    initialRouteName: 'DashboardScreen',
    activeColor: '#ffffff',
    inactiveColor: '#95afc0',
    elevation: 10,
    barStyle: {backgroundColor: '#327BF6', elevation: 10},
  },
);

const MainNavigation = createStackNavigator(
  {
    StartScreen: {
      screen: StartScreen,
    },
    LoginScreen: {
      screen: LoginScreen,
    },
    DashboardScreen: TabNavigation,
    KantorPolisiScreen: {
      screen: KantorPolisiScreen,
    },
    ReportScreen: {
      screen: ReportScreen,
    },
    MapScreen: {
      screen: MapScreen,
    },
    ChatScreen: {
      screen: ChatScreen,
    },
    ProfileScreen: {
      screen: ProfileScreen,
    },
    RegisterScreen: {
      screen: RegisterScreen,
    },
    ChatRoomScreen: {
      screen: ChatRoomScreen,
    },
    CekKTPScreen: {
      screen: CekKTPScreen,
    },
    MainChat: {
      screen: MainChat,
    },
    Kontak: {
      screen: Kontak,
    },
  },
  {
    headerMode: 'none',
    initialRouteKey: 'DashboardScreen',
  },
);

export default createAppContainer(MainNavigation);
