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
import {Dimensions, Image, StatusBar, StyleSheet} from 'react-native';
import {
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native-gesture-handler';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
dashboard = ({navigation}) => {
  const [images, setImages] = useState([
    require('../../asset/image/banner1.png'),
    require('../../asset/image/banner2.jpg'),
    require('../../asset/image/banner3.jpg'),
    require('../../asset/image/banner4.jpg'),
  ]);

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
                  onPress={() => navigation.navigate('ChatScreen')}
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
          </Grid>
        </View>
      </Content>
    </Container>
  );
};

export default dashboard;
