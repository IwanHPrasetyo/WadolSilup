import React, {useState, useEffect} from 'react';
import {Dimensions, StatusBar, SafeAreaView, Modal} from 'react-native';
import {
  Content,
  Header,
  View,
  Text,
  Container,
  Icon,
  Left,
  Body,
  Row,
  Col,
  Grid,
  Badge,
  Thumbnail,
  Fab,
  Button,
  Right,
} from 'native-base';
import {
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {Alert} from 'react-native';
import {StyleSheet} from 'react-native';
import FabHome from '../../component/fabToHome';
import ListChat from '../../component/ListChat/ListChat';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const dataKantorPolisi = [
  {
    pengirim: 'Polresta Malang',
    pesan: 'Kasus dalam penanganan',
    waktu: '20:00',
    pesanMasuk: 4,
    image: 'https://ui-avatars.com/api/?size=256&name=Polresta Malang',
    // image: require('../../asset/image/polisi2.jpeg'),
  },
  {
    pengirim: 'Polsekta Blimbing',
    pesan: 'Kasus Selesai',
    waktu: '14:28',
    pesanMasuk: 2,
    image: 'https://ui-avatars.com/api/?size=256&name=Polsekta Blimbing',
    // image: require('../../asset/image/polisi3.jpg'),
  },
  {
    pengirim: 'Polsekta Kedungkandang',
    pesan: 'Segera meluncur ke TKP',
    waktu: '08:10',
    pesanMasuk: 1,
    image: 'https://ui-avatars.com/api/?size=256&name=Polsekta Kedungkandang',
    // image: require('../../asset/image/polisi4.jpg'),
  },
  {
    pengirim: 'Polsekta Klojen',
    pesan: 'Laporan akan segera kami proses',
    waktu: '08:15',
    pesanMasuk: 0,
    image: 'https://ui-avatars.com/api/?size=256&name=Polsekta Klojen',
    // image: require('../../asset/image/polisi5.jpg'),
  },
  {
    pengirim: 'Polsekta Lowokwaru',
    pesan: 'Trimakasih atas laporan anda',
    waktu: '03:00',
    pesanMasuk: 2,
    image: 'https://ui-avatars.com/api/?size=256&name=Polsekta Lowokwaru',
    // image: require('../../asset/image/polisi6.jpg'),
  },
  {
    pengirim: 'Polsekta Sukun',
    pesan: 'Kasus dalam penanganan',
    waktu: '10:18',
    pesanMasuk: 0,
    image: 'https://ui-avatars.com/api/?size=256&name=Polsekta Sukun',
    // image: require('../../asset/image/polisi7.jpg'),
  },

  {
    pengirim: 'Polsekta Sukun',
    pesan: 'Kasus dalam penanganan',
    waktu: '10:18',
    pesanMasuk: 0,
    image: 'https://ui-avatars.com/api/?size=256&name=Polsekta Sukun',
    // image: require('../../asset/image/polisi7.jpg'),
  },
  {
    pengirim: 'Polsekta Sukun',
    pesan: 'Kasus dalam penanganan',
    waktu: '10:18',
    pesanMasuk: 0,
    image: 'https://ui-avatars.com/api/?size=256&name=Polsekta Sukun',
    // image: require('../../asset/image/polisi7.jpg'),
  },
  {
    pengirim: 'Polsekta Sukun',
    pesan: 'Kasus dalam penanganan',
    waktu: '10:18',
    pesanMasuk: 0,
    image: 'https://ui-avatars.com/api/?size=256&name=Polsekta Sukun',
    // image: require('../../asset/image/polisi7.jpg'),
  },
];

const dataKontak = [
  {
    nama_kantor: 'Polresta Malang',
    alamat: 'Jl. Slamet Riyadi Malang',
    telp: '(0341) 366444',
    latitude: -7.9716824,
    longitude: 112.6305915,
  },
  {
    nama_kantor: 'Polsekta Blimbing',
    alamat: 'Jl. Raden Intan No.6 Malang',
    telp: '(0341) 491304',
    latitude: -7.9299114,
    longitude: 112.6483513,
  },
  {
    nama_kantor: 'Polsekta Kedungkandang',
    alamat: 'Jl. Ki Ageng Gribig 96 Malang',
    telp: '(0341) 325057',
    latitude: -7.9934269,
    longitude: 112.6460037,
  },
  {
    nama_kantor: 'Polsekta Klojen',
    alamat: 'Jl. Kelut 11 Malang',
    telp: '(0341) 361667',
    latitude: -7.9808747,
    longitude: 112.6233234,
  },
  {
    nama_kantor: 'Polsekta Lowokwaru',
    alamat: 'Jl. Lowokwaru-Malang',
    telp: '(0341) 472392',
    latitude: -7.9413999,
    longitude: 112.6071599,
  },
  {
    nama_kantor: 'Polsekta Sukun',
    alamat: 'Jl. Kol Sugiono No.5 Malang',
    telp: '(0341) 368638',
    latitude: -8.0042733,
    longitude: 112.6163261,
  },
];

const chat = ({navigation}) => {
  const [active, setActive] = useState(false);

  return (
    <Container>
      <View style={{backgroundColor: '#327BF6'}}>
        <FlatList
          data={dataKantorPolisi}
          initialNumToRender={7}
          style={{marginTop: 16, marginBottom: 16, zIndex: 1}}
          renderItem={({item, index}) => (
            <ListChat item={item} navigation={navigation} index={index} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <FabHome navigation={navigation} />
    </Container>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabView: {
    position: 'absolute',
    top: '80%',
    left: '75%',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 60,
    elevation: 2,
    backgroundColor: '#f9ca24',
  },
  modalView: {
    height: '90%',
    width: '90%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default chat;
