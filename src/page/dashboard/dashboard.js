import React, {useState, useEffect} from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import {
  Container,
  Header,
  Content,
  View,
  Text,
  Card,
  CardItem,
  Left,
  Body,
  Button,
  Grid,
  Row,
  Col,
  Icon,
  Footer,
  FooterTab,
} from 'native-base';
import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  ToastAndroid,
} from 'react-native';
import {
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native-gesture-handler';
import database from '@react-native-firebase/database';
import {firebase} from '../../helper/FirebaseSync';
import {getDataLogin, getInLocation} from '../../helper/Asyncstorage';
import moment from 'moment';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const dashboard = ({navigation}) => {
  const [images, setImages] = useState([
    require('../../asset/image/banner1.png'),
    require('../../asset/image/banner2.jpg'),
    require('../../asset/image/banner3.jpg'),
    require('../../asset/image/banner4.jpg'),
  ]);
  const [dataUser, setDataUser] = useState();
  const [dataLatitude, setDataLatitude] = useState();
  const [dataLongtitude, setDataLongtitude] = useState();

  useEffect(() => {
    dataLogin();
  }, []);

  const dataLogin = async () => {
    let data = await getDataLogin();
    data.length > 0 ? setDataUser(data) : null;

    let location = await getInLocation();
    location.la != undefined
      ? (setDataLatitude(location.la), setDataLongtitude(location.lo))
      : null;
    // console.log('get data locatioon');
    // console.log(location.length);
    // console.log(location.lo);
  };

  const dataLaporan = async () => {
    let data = [];
    await database()
      .ref(`/DataLaporan`)
      .once('value')
      .then(snapshot => {
        data = snapshot.val();
      });
    simpanLaporan(data.length);
  };

  const simpanLaporan = no => {
    database()
      .ref(`/DataLaporan/${no}`)
      .set({
        jenisKriminal: 'SOS',
        kronologi: 'SOS',
        namaPelapor: dataUser[0].nama,
        noLaporan: no,
        namaLaporan: 'SOS',
        nomerId: dataUser[0].noIdentitas,
        status: 'Proses',
        tanggal: moment().format('l'),
        namaPolse: 'Polres Malang Kota',
        telfon: dataUser[0].telfon,
        latitude: dataLatitude,
        Longtitude: dataLongtitude,
      })
      .then(() => {
        ToastAndroid.show('Laporan SOS Berhasil', ToastAndroid.SHORT);
      });
  };

  return (
    <Container>
      <Header style={{backgroundColor: '#327BF6'}}>
        <StatusBar backgroundColor="#327BF6" barStyle="light-content" />
        <Body>
          <Row>
            <Col style={{justifyContent: 'center'}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#ffffff',
                  fontSize: SCREEN_HEIGHT * 0.05,
                  alignSelf: 'flex-end',
                  paddingRight: '2%',
                }}>
                .Hallo
              </Text>
            </Col>
            <Col style={{justifyContent: 'center'}}>
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: SCREEN_HEIGHT * 0.05,
                  alignSelf: 'flex-start',
                  paddingLeft: '2%',
                }}>
                Police
              </Text>
            </Col>
          </Row>
        </Body>
      </Header>
      <Content>
        <View
          style={{
            paddingTop: SCREEN_HEIGHT * 0.02,
            paddingBottom: SCREEN_HEIGHT * 0.04,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}>
          <SliderBox
            images={images}
            autoplay
            circleLoop
            sliderBoxHeight={SCREEN_HEIGHT * 0.25}
            dotColor="#ffffff"
            inactiveDotColor="#eb4d4b"
            ImageComponentStyle={{borderRadius: 15, width: '90%', marginTop: 5}}
            imageLoadingColor="#2196F3"
          />
        </View>
        <View
          style={{
            paddingHorizontal: SCREEN_WIDTH * 0.05,
          }}>
          <Grid>
            <Row style={{height: SCREEN_HEIGHT * 0.2}}>
              <Col
                style={{
                  flex: 1,
                  justifyContent: 'center',
                }}>
                <Button
                  onPress={() => navigation.navigate('KantorPolisiScreen')}
                  style={{
                    height: '100%',
                    backgroundColor: 'transparent',
                    elevation: 0,
                    width: '100%',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      height: '100%',
                      borderRadius: 10,
                      backgroundColor: '#ffffff',
                      elevation: 4,
                      width: '80%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={require('../../asset/image/station.png')}
                      style={{width: '50%', height: '60%'}}
                    />
                    <Text style={{fontWeight: 'bold', color: '#273c75'}}>
                      Kantor Polisi
                    </Text>
                  </View>
                </Button>
              </Col>
              <Col
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Button
                  onPress={() => navigation.navigate('ReportScreen')}
                  style={{
                    height: '100%',
                    backgroundColor: 'transparent',
                    elevation: 0,
                    width: '100%',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      height: '100%',
                      borderRadius: 10,
                      backgroundColor: '#ffffff',
                      elevation: 4,
                      width: '80%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={require('../../asset/image/report.png')}
                      style={{width: '40%', height: '50%'}}
                    />
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: '#273c75',
                        marginTop: SCREEN_HEIGHT * 0.015,
                      }}>
                      Buat Laporan
                    </Text>
                  </View>
                </Button>
              </Col>
            </Row>
            <Row
              style={{
                height: SCREEN_HEIGHT * 0.2,
                marginTop: SCREEN_HEIGHT * 0.02,
              }}>
              <Col
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Button
                  onPress={() => navigation.navigate('MainChat')}
                  style={{
                    height: '100%',
                    backgroundColor: 'transparent',
                    elevation: 0,
                    width: '100%',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      height: '100%',
                      borderRadius: 10,
                      backgroundColor: '#ffffff',
                      elevation: 4,
                      width: '80%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={require('../../asset/image/speak.png')}
                      style={{width: '50%', height: '60%'}}
                    />
                    <Text style={{fontWeight: 'bold', color: '#273c75'}}>
                      Chat
                    </Text>
                  </View>
                </Button>
              </Col>
              <Col
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Button
                  onPress={() => navigation.navigate('ProfileScreen')}
                  style={{
                    height: '100%',
                    backgroundColor: 'transparent',
                    elevation: 0,
                    width: '100%',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      height: '100%',
                      borderRadius: 10,
                      backgroundColor: '#ffffff',
                      elevation: 4,
                      width: '80%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={require('../../asset/image/userok.png')}
                      style={{width: '44%', height: '54%'}}
                    />
                    <Text style={{fontWeight: 'bold', color: '#273c75'}}>
                      Profil
                    </Text>
                  </View>
                </Button>
              </Col>
            </Row>

            <Row
              style={{
                height: SCREEN_HEIGHT * 0.1,
                marginTop: SCREEN_HEIGHT * 0.02,
              }}>
              <Col
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Button
                  onPress={() => {
                    dataLaporan();
                  }}
                  style={{
                    height: '100%',
                    backgroundColor: 'transparent',
                    elevation: 0,
                    width: '100%',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      height: '100%',
                      borderRadius: 10,
                      backgroundColor: '#ffffff',
                      elevation: 4,
                      width: '80%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: '#273c75',
                        fontSize: 20,
                      }}>
                      SOS
                    </Text>
                  </View>
                </Button>
              </Col>
            </Row>
          </Grid>
        </View>
      </Content>
    </Container>
  );
};

export default dashboard;
