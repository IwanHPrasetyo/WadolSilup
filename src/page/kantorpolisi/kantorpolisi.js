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
    nama_kantor: 'Polwil Malang',
    alamat: 'Jl. Singosari Malang',
    telp: '(0341) 453466',
  },
  {
    nama_kantor: 'Polresta Malang',
    alamat: 'Jl. Slamet Riyadi Malang',
    telp: '(0341) 366444',
  },
  {
    nama_kantor: 'Polsekta Blimbing',
    alamat: 'Jl. Raden Intan No.6 Malang',
    telp: '(0341) 491304',
  },
  {
    nama_kantor: 'Polsekta Kedungkandang',
    alamat: 'Jl. Ki Ageng Gribig 96 Malang',
    telp: '(0341) 325057',
  },
  {
    nama_kantor: 'Polsekta Klojen',
    alamat: 'Jl. Kelut 11 Malang',
    telp: '(0341) 361667',
  },
  {
    nama_kantor: 'Polsekta Lowokwaru',
    alamat: 'Jl. Lowokwaru-Malang',
    telp: '(0341) 472392',
  },
  {
    nama_kantor: 'Polsekta Sukun',
    alamat: 'Jl. Kol Sugiono No.5 Malang',
    telp: '(0341) 368638',
  },
];

kantorpolisi = ({navigation}) => {
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
          {/* <Row>
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
                .Kantor
              </Text>
            </Col>
            <Col
              style={{
                flex: 1.8,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: SCREEN_HEIGHT * 0.05,
                  alignSelf: 'flex-start',
                }}>
                Polisi
              </Text>
            </Col>
          </Row> */}
        </Body>
      </Header>
      <Content>
        <SafeAreaView style={Styles.container}>
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
            renderItem={({item}) => (
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
                                {item.nama_kantor}
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
                              <Text numberOfLines={1} style={Styles.textItem2}>
                                {item.alamat}
                              </Text>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <Button style={Styles.button}>
                        <Icon
                          name="google-maps"
                          type="MaterialCommunityIcons"
                        />
                      </Button>
                    </Col>
                  </Row>
                </Grid>
              </View>
            )}
            keyExtractor={item => item.nama_kantor}
          />
        </SafeAreaView>
      </Content>
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
