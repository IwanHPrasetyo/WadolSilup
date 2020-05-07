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

masterlaporan = ({navigation}) => {
  return (
    <Container>
      <Header style={{backgroundColor: '#327BF6'}}>
        <StatusBar backgroundColor="#327BF6" barStyle="light-content" />
        <Left style={{flex: 1}}>
          <Icon
            onPress={() => navigation.goBack()}
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
                flex: 1,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#ffffff',
                  fontSize: SCREEN_HEIGHT * 0.05,
                  alignSelf: 'flex-start',
                }}>
                .Riwayat
              </Text>
            </Col>
            <Col
              style={{
                flex: 1.4,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: SCREEN_HEIGHT * 0.05,
                  alignSelf: 'flex-start',
                }}>
                Laporan
              </Text>
            </Col>
          </Row>
        </Body>
      </Header>
      <Content>
        <SafeAreaView style={Styles.container}>
          <FlatList
            data={dataKantorPolisi}
            renderItem={({item}) => (
              <>
                <Text
                  style={{
                    paddingHorizontal: 20,
                    fontWeight: 'bold',
                    color: '#ffffff',
                    fontSize: SCREEN_WIDTH * 0.05,
                  }}>
                  {item.tanggal}
                </Text>
                <View style={Styles.item}>
                  <Grid>
                    <Row>
                      <Col style={{flex: 3}}>
                        <Row>
                          <Col>
                            <Row>
                              <Col
                                style={{
                                  flex: 1,
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                }}>
                                <Icon
                                  name="car-alt"
                                  type="FontAwesome5"
                                  style={{
                                    fontSize: SCREEN_WIDTH * 0.05,
                                    color: '#327BF6',
                                  }}
                                />
                              </Col>
                              <Col
                                style={{
                                  flex: 8,
                                  justifyContent: 'center',
                                  marginLeft: SCREEN_WIDTH * 0.01,
                                }}>
                                <Text numberOfLines={1} style={Styles.textItem}>
                                  {item.nama_kasus}
                                </Text>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                        <Row style={{marginTop: SCREEN_HEIGHT * 0.006}}>
                          <Col>
                            <Row>
                              <Col
                                style={{
                                  flex: 1,
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                }}>
                                <Icon
                                  name="location-pin"
                                  type="Entypo"
                                  style={{
                                    fontSize: SCREEN_WIDTH * 0.05,
                                    color: '#f1c40f',
                                  }}
                                />
                              </Col>
                              <Col
                                style={{
                                  flex: 8,
                                  justifyContent: 'center',
                                  marginLeft: SCREEN_WIDTH * 0.01,
                                }}>
                                <Text
                                  numberOfLines={1}
                                  style={[Styles.textItem2]}>
                                  {item.alamat}
                                </Text>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                        <Row style={{marginTop: SCREEN_HEIGHT * 0.006}}>
                          <Col>
                            <Row>
                              <Col
                                style={{
                                  flex: 1,
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                }}>
                                <Icon
                                  name="location-pin"
                                  type="Entypo"
                                  style={{
                                    fontSize: SCREEN_WIDTH * 0.05,
                                    color: '#f1c40f',
                                  }}
                                />
                              </Col>
                              <Col
                                style={{
                                  flex: 8,
                                  justifyContent: 'center',
                                  marginLeft: SCREEN_WIDTH * 0.01,
                                }}>
                                <Text
                                  numberOfLines={1}
                                  style={[Styles.textItem2]}>
                                  {item.status}
                                </Text>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                      <Col style={{justifyContent: 'center'}}>
                        <Button style={Styles.button}>
                          <Icon name="clipboard-list" type="FontAwesome5" />
                        </Button>
                      </Col>
                    </Row>
                  </Grid>
                </View>
              </>
            )}
            keyExtractor={item => item.nama_kasus}
          />
        </SafeAreaView>
      </Content>
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
