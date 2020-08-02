import React, {useEffect, useState} from 'react';
import {
  Text,
  Container,
  Header,
  Content,
  Left,
  Icon,
  Body,
  Row,
  Col,
  View,
  Grid,
  Image,
  Thumbnail,
  Button,
} from 'native-base';
import {StatusBar, StyleSheet, Dimensions} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {getDataLogin} from '../../helper/Asyncstorage';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

profile = ({navigation}) => {
  let [dataUser, setDataUser] = useState([]);
  useEffect(() => {
    getUser();
  }, []);

  const Logout = async () => {
    try {
      await AsyncStorage.clear();
      setTimeout(() => {
        navigation.navigate('LoginScreen');
      }, 1000);
    } catch (error) {
      console.log('gagal hapus data login');
    }
  };
  const getUser = async () => {
    let data = await getDataLogin();
    setDataUser(data);
    console.log(data);
  };
  return (
    <Container>
      <Header style={Styles.header}>
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
          <Row>
            <Col
              style={{
                width: SCREEN_WIDTH * 0.22,
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#ffffff',
                  fontSize: SCREEN_WIDTH * 0.08,
                }}>
                .Profil
              </Text>
            </Col>
            <Col
              style={{
                paddingLeft: 10,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: SCREEN_WIDTH * 0.08,
                  alignSelf: 'flex-start',
                }}>
                Anda
              </Text>
            </Col>
          </Row>
        </Body>
      </Header>
      <Content>
        <StatusBar backgroundColor="#327BF6" barStyle="light-content" />
        <View style={Styles.profileHeader}>
          <Grid>
            <Row>
              <Col
                style={{
                  backgroundColor: '#327BF6',
                  alignItems: 'center',
                  padding: 20,
                  paddingBottom: 50,
                }}>
                <Thumbnail
                  style={{
                    borderColor: '#ffffff',
                    borderWidth: 4,
                    borderRadius: 200,
                    height: SCREEN_HEIGHT * 0.3,
                    width: SCREEN_HEIGHT * 0.3,
                  }}
                  source={require('../../asset/image/login.png')}
                />
              </Col>
            </Row>
          </Grid>
        </View>
        <View
          style={{
            marginTop: -30,
            position: 'relative',
            marginHorizontal: SCREEN_WIDTH * 0.05,
            backgroundColor: '#ffffff',
            padding: 10,
            elevation: 4,
            marginBottom: 10,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#273c75',
              fontSize: SCREEN_HEIGHT * 0.035,
            }}>
            {dataUser.length != 0 ? dataUser[0].email : 'email'}
          </Text>
          <Text
            style={{
              fontSize: SCREEN_HEIGHT * 0.03,
              fontWeight: 'bold',
              color: '#273c75',
            }}>
            {dataUser.length != 0 ? dataUser[0].nama : 'nama user'}
          </Text>
        </View>
        <View>
          <Row style={{marginTop: '3%'}}>
            <Col
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#327BF6',
                  padding: '8%',
                  borderRadius: 200,
                  borderWidth: 4,
                  elevation: 4,
                  borderColor: '#ffffff',
                }}>
                <Icon
                  style={{color: '#ffffff', fontSize: SCREEN_HEIGHT * 0.1}}
                  name="book"
                  type="Entypo"
                />
                <View
                  style={{
                    position: 'absolute',
                    backgroundColor: '#f9ca24',
                    paddingHorizontal: '10%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 20,
                    top: '6%',
                    left: '45%',
                    paddingVertical: '4%',
                  }}>
                  <Text style={{fontWeight: 'bold', color: '#ffffff'}}>3</Text>
                </View>
              </View>
              <Text
                style={{
                  fontSize: SCREEN_WIDTH * 0.05,
                  marginTop: '5%',
                  fontWeight: 'bold',
                  color: '#273c75',
                }}>
                Laporan Selesai
              </Text>
            </Col>
            <Col
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#327BF6',
                  padding: '8%',
                  borderRadius: 200,
                  borderWidth: 4,
                  elevation: 4,
                  borderColor: '#ffffff',
                }}>
                <Icon
                  style={{color: '#ffffff', fontSize: SCREEN_HEIGHT * 0.1}}
                  name="open-book"
                  type="Entypo"
                />
                <View
                  style={{
                    position: 'absolute',
                    backgroundColor: '#f9ca24',
                    paddingHorizontal: '10%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 20,
                    top: '6%',
                    left: '45%',
                    paddingVertical: '4%',
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: '#ffffff',
                    }}>
                    3
                  </Text>
                </View>
              </View>
              <Text
                numberOfLines={1}
                style={{
                  marginTop: '5%',
                  fontSize: SCREEN_WIDTH * 0.05,
                  fontWeight: 'bold',
                  color: '#273c75',
                }}>
                Laporan Proses
              </Text>
            </Col>
          </Row>
        </View>
      </Content>
      <TouchableOpacity onPress={() => Logout()}>
        <View style={{width: '100%'}}>
          <Button
            style={{
              backgroundColor: '#327BF6',
              width: '100%',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              justifyContent: 'center',
            }}>
            <Icon
              style={{fontSize: SCREEN_WIDTH * 0.07}}
              name="window-close"
              type="FontAwesome"
            />
            <Text
              style={{
                marginLeft: -20,
                fontSize: SCREEN_WIDTH * 0.04,
                fontWeight: 'bold',
              }}>
              Logout
            </Text>
          </Button>
        </View>
      </TouchableOpacity>
    </Container>
  );
};

const Styles = StyleSheet.create({
  header: {
    backgroundColor: '#327BF6',
  },
});

export default profile;
