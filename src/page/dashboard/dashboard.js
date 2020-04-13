import React, {useState, useEffect} from 'react';
import {
  Container,
  Header,
  Content,
  View,
  Text,
  Card,
  CardItem,
  Image,
  Left,
  Body,
  Grid,
  Row,
  Col,
  Icon,
} from 'native-base';
import {Dimensions, ImageBackground} from 'react-native';

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
            marginTop: SCREEN_HEIGHT * 0.08,
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
                  <Icon
                    name="google-plus-square"
                    type="FontAwesome"
                    style={{color: '#e74c3c', fontSize: SCREEN_HEIGHT * 0.08}}
                  />
                  <Text>Kantor Polisi</Text>
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
                  <Icon
                    name="google-plus-square"
                    type="FontAwesome"
                    style={{color: '#e74c3c', fontSize: SCREEN_HEIGHT * 0.08}}
                  />
                  <Text>Kantor Polisi</Text>
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
                  <Icon
                    name="google-plus-square"
                    type="FontAwesome"
                    style={{color: '#e74c3c', fontSize: SCREEN_HEIGHT * 0.08}}
                  />
                  <Text>Kantor Polisi</Text>
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
                  <Icon
                    name="google-plus-square"
                    type="FontAwesome"
                    style={{color: '#e74c3c', fontSize: SCREEN_HEIGHT * 0.08}}
                  />
                  <Text>Kantor Polisi</Text>
                </View>
              </Col>
            </Row>
          </Grid>
        </View>
      </Content>
    </Container>
  );
});
