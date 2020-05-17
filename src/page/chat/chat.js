import React, {useState, useEffect} from 'react';
import {Dimensions, StatusBar, SafeAreaView} from 'react-native';
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
} from 'native-base';
import {FlatList} from 'react-native-gesture-handler';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const dataKantorPolisi = [
  {
    pengirim: 'Polwil Malang',
    pesan: 'Laporan anda sedang diproses',
    waktu: '08:00',
    pesanMasuk: 1,
    image: require('../../asset/image/polisi1.jpeg'),
  },
  {
    pengirim: 'Polresta Malang',
    pesan: 'Kasus dalam penanganan',
    waktu: '20:00',
    pesanMasuk: 4,
    image: require('../../asset/image/polisi2.jpeg'),
  },
  {
    pengirim: 'Polsekta Blimbing',
    pesan: 'Kasus Selesai',
    waktu: '14:28',
    pesanMasuk: 2,
    image: require('../../asset/image/polisi3.jpg'),
  },
  {
    pengirim: 'Polsekta Kedungkandang',
    pesan: 'Segera meluncur ke TKP',
    waktu: '08:10',
    pesanMasuk: 1,
    image: require('../../asset/image/polisi4.jpg'),
  },
  {
    pengirim: 'Polsekta Klojen',
    pesan: 'Laporan akan segera kami proses',
    waktu: '08:15',
    pesanMasuk: 0,
    image: require('../../asset/image/polisi5.jpg'),
  },
  {
    pengirim: 'Polsekta Lowokwaru',
    pesan: 'Trimakasih atas laporan anda',
    waktu: '03:00',
    pesanMasuk: 2,
    image: require('../../asset/image/polisi6.jpg'),
  },
  {
    pengirim: 'Polsekta Sukun',
    pesan: 'Kasus dalam penanganan',
    waktu: '10:18',
    pesanMasuk: 0,
    image: require('../../asset/image/polisi7.jpg'),
  },
];

chat = ({navigation}) => {
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
        <Body>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#ffffff',
              fontSize: SCREEN_HEIGHT * 0.05,
              alignSelf: 'flex-start',
            }}>
            .M
            <Text
              style={{
                fontWeight: null,
                color: '#ffffff',
                fontSize: SCREEN_HEIGHT * 0.05,
                alignSelf: 'flex-start',
              }}>
              essages
            </Text>
          </Text>
        </Body>
      </Header>
      <Content style={{backgroundColor: '#327BF6'}}>
        <SafeAreaView>
          <FlatList
            data={dataKantorPolisi}
            renderItem={({item}) => (
              <Grid
                style={{
                  backgroundColor: '#ffffff',
                  marginHorizontal: '2%',
                  marginVertical: '1%',
                  borderRadius: 10,
                  height: SCREEN_HEIGHT * 0.12,
                  paddingHorizontal: '4%',
                }}>
                <Row>
                  <Col
                    style={{
                      flex: 1.5,
                      justifyContent: 'center',
                    }}>
                    <Thumbnail source={item.image} />
                    {item.pesanMasuk != 0 ? (
                      <View
                        style={{
                          position: 'absolute',
                          backgroundColor: '#f9ca24',
                          paddingHorizontal: '10%',
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 12,
                          top: '6%',
                          left: '45%',
                          paddingVertical: '4%',
                        }}>
                        <Text style={{fontWeight: 'bold', color: '#ffffff'}}>
                          {item.pesanMasuk}
                        </Text>
                      </View>
                    ) : null}
                  </Col>
                  <Col
                    style={{
                      flex: 3.5,
                      justifyContent: 'center',
                    }}>
                    <Text
                      numberOfLines={1}
                      style={{fontWeight: 'bold', color: '#273c75'}}>
                      {item.pengirim}
                    </Text>
                    <Text numberOfLines={1} style={{color: '#afafaf'}}>
                      {item.pesan}
                    </Text>
                  </Col>
                  <Col
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'flex-end',
                    }}>
                    <Text style={{color: '#afafaf', fontWeight: 'bold'}}>
                      {item.waktu}
                    </Text>
                  </Col>
                </Row>
              </Grid>
            )}
          />
        </SafeAreaView>
      </Content>
    </Container>
  );
};

export default chat;
