import React, {useState, useEffect} from 'react';
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
import {Dimensions, Image} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default (dashboard = ({navigation}) => {
  return (
    <Container>
      <Header style={{backgroundColor: '#ffffff'}}>
        <Body>
          <Text style={{fontWeight: 'bold', fontSize: SCREEN_HEIGHT * 0.04}}>
            Dashboard
          </Text>
        </Body>
      </Header>
      <Content>
        <View
          style={{
            paddingHorizontal: SCREEN_WIDTH * 0.05,
            marginTop: SCREEN_HEIGHT * 0.06,
          }}>
          <Card style={{borderRadius: 10}}>
            <CardItem
              style={{
                backgroundColor: '#0652DD',
                height: SCREEN_HEIGHT * 0.2,
                borderRadius: 10,
              }}
            />
          </Card>
        </View>
        <View
          style={{
            paddingHorizontal: SCREEN_WIDTH * 0.05,
            marginTop: SCREEN_HEIGHT * 0.08,
          }}>
          <Grid>
            <Row style={{height: SCREEN_HEIGHT * 0.2}}>
              <Col
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: '80%',
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
              </Col>
              <Col
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: '80%',
                    borderRadius: 10,
                    backgroundColor: '#ffffff',
                    elevation: 4,
                    width: '80%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../../asset/image/report.png')}
                    style={{width: '40%', height: '60%'}}
                  />
                  <Text style={{fontWeight: 'bold', color: '#273c75'}}>
                    Buat Laporan
                  </Text>
                </View>
              </Col>
            </Row>
            <Row style={{height: SCREEN_HEIGHT * 0.2}}>
              <Col
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: '80%',
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
              </Col>
              <Col
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: '80%',
                    borderRadius: 10,
                    backgroundColor: '#ffffff',
                    elevation: 4,
                    width: '80%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../../asset/image/map.png')}
                    style={{width: '44%', height: '60%', zIndex: 2}}
                  />
                  <Text style={{fontWeight: 'bold', color: '#273c75'}}>
                    Lokasi anda
                  </Text>
                </View>
              </Col>
            </Row>
          </Grid>
        </View>
      </Content>
      <Footer>
        <FooterTab>
          <Button>
            <Icon name="apps" />
          </Button>
          <Button>
            <Icon name="camera" />
          </Button>
          <Button active>
            <Icon active name="navigate" />
          </Button>
          <Button>
            <Icon name="person" />
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
});
