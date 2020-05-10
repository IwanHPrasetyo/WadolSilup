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
} from 'native-base';
import {StatusBar, StyleSheet, Dimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

profile = ({navigation}) => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    Geolocation.getCurrentPosition(info => {
      setLatitude(info.coords.latitude);
      setLongitude(info.coords.longitude);
    });
  };

  return (
    <Container>
      <Header style={Styles.header}>
        <Left style={{flex: 1}}>
          <Icon
            onPress={() => navigation.goBack()}
            name="user-circle-o"
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
                  alignSelf: 'flex-end',
                }}>
                .Profil
              </Text>
            </Col>
            <Col
              style={{
                flex: 2,
                paddingLeft: 10,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: SCREEN_HEIGHT * 0.05,
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
                  large
                  style={{borderColor: '#ffffff', borderWidth: 4, elevation: 4}}
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
          <Text style={{fontWeight: 'bold', color: '#273c75'}}>
            03183183108
          </Text>
          <Text style={{fontWeight: 'bold', color: '#273c75'}}>M Fulan</Text>
        </View>
        <View style={Styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={Styles.map}
            region={{
              latitude: parseFloat(latitude),
              longitude: parseFloat(longitude),
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}>
            <Marker
              coordinate={{
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
              title={'Lokasi Anda'}
              description={'You here'}
            />
          </MapView>
        </View>
      </Content>
    </Container>
  );
};

const Styles = StyleSheet.create({
  header: {
    backgroundColor: '#327BF6',
  },
  profileHeader: {
    flex: 1,
    backgroundColor: '#327BF6',
  },
  container: {
    marginTop: -40,
    height: SCREEN_HEIGHT * 0.53,
    width: SCREEN_WIDTH * 1,
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default profile;
