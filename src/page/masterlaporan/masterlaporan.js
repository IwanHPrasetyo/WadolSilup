import React, {useState, useEffect} from 'react';
import {
  Container,
  Header,
  Content,
  Text,
  Body,
  Row,
  Col,
  Left,
  Icon,
  View,
  Grid,
  Button,
} from 'native-base';
import {Dimensions, StatusBar, SafeAreaView, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import ListLaporan from '../../component/ListLaporan/ListLaporan';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const dataKantorPolisi = [
  {
    nama_kasus: 'Pencurian Kendaran Bermotor',
    alamat: 'Jl. Singosari Malang',
    status: 'Proses Penyelidikan',
    tanggal: 'Senin, Dec 02/2020',
  },
  {
    nama_kasus: 'Penipuan',
    alamat: 'Jl. Slamet Riyadi Malang',
    status: 'Kasus Selesai',
    tanggal: 'Sabtu, Mar 12/2020',
  },
  {
    nama_kasus: 'Hoax',
    alamat: 'Jl. Raden Intan No.6 Malang',
    status: 'Proses Berkas',
    tanggal: 'Kamis, July 02/2019',
  },
  {
    nama_kasus: 'Pencemaran Nama Baik',
    alamat: 'Jl. Ki Ageng Gribig 96 Malang',
    status: 'Kasus Selesai',
    tanggal: 'Senin, Dec 02/2020',
  },
  {
    nama_kasus: 'Pencemaran Nama Baik',
    alamat: 'Jl. Kelut 11 Malang',
    status: 'Proses Berkas',
    tanggal: 'Senin, Dec 02/2020',
  },
  {
    nama_kasus: 'Hoax',
    alamat: 'Jl. Lowokwaru-Malang',
    status: 'Kasusu Selesai',
    tanggal: 'Senin, Dec 02/2020',
  },
  {
    nama_kasus: 'Hoax',
    alamat: 'Jl. Kol Sugiono No.5 Malang',
    status: 'Kasusu Selesai',
    tanggal: 'Senin, Dec 02/2020',
  },
];

const masterlaporan = ({navigation}) => {
  return (
    <Container>
      <Header style={{backgroundColor: '#327BF6'}}>
        <StatusBar backgroundColor="#327BF6" barStyle="light-content" />
        <Left style={{flex: 1}}>
          <Icon
            name="th-large"
            type="FontAwesome"
            style={{
              color: '#ffffff',
              fontSize: SCREEN_WIDTH * 0.1,
              paddingLeft: SCREEN_WIDTH * 0.01,
            }}
          />
        </Left>
        <Body style={{flex: 3}}>
          <Row>
            <Col
              style={{
                width: SCREEN_WIDTH * 0.3,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#ffffff',
                  fontSize: SCREEN_WIDTH * 0.07,
                  alignSelf: 'flex-start',
                }}>
                .Riwayat
              </Text>
            </Col>
            <Col
              style={{
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: SCREEN_WIDTH * 0.07,
                  alignSelf: 'flex-start',
                }}>
                Laporan
              </Text>
            </Col>
          </Row>
        </Body>
      </Header>
      <View style={Styles.container}>
        <FlatList
          data={dataKantorPolisi}
          renderItem={({item, index}) => (
            <ListLaporan item={item} Styles={Styles} index={index} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </Container>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#327BF6',
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  textItem: {
    color: '#273c75',
    fontWeight: 'bold',
  },
  textItem2: {
    color: '#273c75',
    fontSize: SCREEN_HEIGHT * 0.026,
  },
  button: {
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1289A7',
  },
});

export default masterlaporan;
