import React, {useState, useEffect} from 'react';
import {
  Container,
  Header,
  Content,
  View,
  Text,
  Form,
  Item,
  Input,
  Row,
  Col,
  Button,
  Grid,
} from 'native-base';
import {Dimensions, Image} from 'react-native';
import Styles from '../../style/style';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default login = ({navigation}) => {
  return (
    <Container>
      <Image
        source={require('../../asset/image/login.png')}
        style={{
          width: '100%',
          height: SCREEN_HEIGHT * 0.65,
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
        }}
      />
      <View style={{marginTop: SCREEN_HEIGHT * -0.008}}>
        <Row style={Styles.rowHeader}>
          <Col style={{flex: 1, paddingLeft: SCREEN_WIDTH * 0.02}}>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#f1c40f',
                fontSize: SCREEN_HEIGHT * 0.12,
              }}>
              .LoGin
            </Text>
          </Col>
        </Row>
      </View>
      <Content>
        <View
          style={{
            marginTop: SCREEN_HEIGHT * 0.08,
          }}>
          <Grid>
            <Row>
              <Col>
                <Button
                  style={{
                    borderRadius: 10,
                    marginHorizontal: SCREEN_WIDTH * 0.02,
                    backgroundColor: '#4b7bec',
                    justifyContent: 'center',
                  }}>
                  <Text style={{fontWeight: 'bold'}}>Login</Text>
                </Button>
              </Col>
            </Row>
            <Row style={{paddingTop: SCREEN_HEIGHT * 0.02}}>
              <Col>
                <Button
                  style={{
                    borderRadius: 10,
                    marginHorizontal: SCREEN_WIDTH * 0.02,
                    backgroundColor: '#f1c40f',
                    justifyContent: 'center',
                  }}>
                  <Text style={{fontWeight: 'bold'}}>Daftar</Text>
                </Button>
              </Col>
            </Row>
          </Grid>
        </View>
      </Content>
    </Container>
  );
};
