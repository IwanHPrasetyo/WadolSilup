import React, {useState, useEffect} from 'react';
import {Container, Header, Text, Body, Left, Icon, View} from 'native-base';
import {Dimensions, StatusBar, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import ListKantorPolisi from '../../component/ListKantorPolisi/ListKantorPolisi';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const dataKantorPolisi = [
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

const kantorpolisi = ({navigation}) => {
  return (
    <Container>
      <Header style={{backgroundColor: '#327BF6'}}>
        <StatusBar backgroundColor="#327BF6" barStyle="light-content" />
        <Left>
          <Icon
            onPress={() => navigation.goBack()}
            name="arrow-circle-left"
            type="FontAwesome"
            style={{
              color: '#ffffff',
              fontSize: SCREEN_WIDTH * 0.1,
              paddingLeft: SCREEN_WIDTH * 0.01,
            }}
          />
        </Left>
        <Body />
      </Header>

      <View style={Styles.container}>
        <Text
          style={{
            paddingHorizontal: 16,
            fontWeight: 'bold',
            color: '#ffffff',
            fontSize: SCREEN_WIDTH * 0.1,
          }}>
          Daftar Kantor Polisi Kota Malang
        </Text>
        <FlatList
          data={dataKantorPolisi}
          renderItem={({item, index}) => (
            <ListKantorPolisi
              item={item}
              Styles={Styles}
              index={index}
              navigation={navigation}
            />
          )}
          keyExtractor={item => item.nama_kantor}
        />
      </View>
    </Container>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default kantorpolisi;
