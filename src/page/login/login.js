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
  Label,
  Icon,
  Body,
  Right,
  Left,
} from 'native-base';
import {Dimensions, Image} from 'react-native';
import Styles from '../../style/style';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default (login = ({navigation}) => {
  const [username, setUsername] = useState(false);
  const [password, setPassword] = useState(false);

  return (
    <Container>
      <Header style={{backgroundColor: '#ffffff', elevation: 0}}>
        <Left
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <Icon name="megaphone" type="Entypo" style={{color: '#34495e'}} />
        </Left>
        <Body style={{flex: 5}}>
          <Text
            style={{
              fontSize: SCREEN_HEIGHT * 0.04,
              fontWeight: 'bold',
              color: '#34495e',
            }}>
            Wadol Silup
          </Text>
        </Body>
      </Header>
      <Content>
        <View
          style={{
            marginTop: SCREEN_HEIGHT * 0.03,
            paddingHorizontal: SCREEN_WIDTH * 0.1,
          }}>
          <Text
            style={{
              color: '#34495e',
              fontSize: SCREEN_HEIGHT * 0.1,
              fontWeight: 'bold',
            }}>
            Login
          </Text>
          <Text
            style={{
              color: '#34495e',
              fontSize: SCREEN_HEIGHT * 0.026,
              fontWeight: 'bold',
            }}>
            Silahkan login dengan akun anda
          </Text>
          <Form style={{marginTop: SCREEN_HEIGHT * 0.01}}>
            <Item
              floatingLabel
              style={{borderColor: username == true ? '#4b7bec' : '#afafaf'}}>
              <Icon
                name="user"
                type="FontAwesome"
                style={{color: username == true ? '#4b7bec' : '#afafaf'}}
              />
              <Label style={{color: '#afafaf'}}>Username</Label>
              <Input
                onFocus={() => {
                  setUsername(true), setPassword(false);
                }}
              />
              <Icon
                name="check-circle"
                type="FontAwesome"
                style={{color: username == true ? '#44bd32' : '#afafaf'}}
              />
            </Item>
            <Item
              floatingLabel
              style={{borderColor: password == true ? '#4b7bec' : '#afafaf'}}>
              <Icon
                name="lock"
                type="FontAwesome"
                style={{color: password == true ? '#4b7bec' : '#afafaf'}}
              />
              <Label style={{color: '#afafaf'}}>Password</Label>
              <Input
                onFocus={() => {
                  setUsername(false), setPassword(true);
                }}
              />
              <Icon
                name="md-eye"
                type="Ionicons"
                style={{color: password == true ? '#fbc531' : '#afafaf'}}
              />
            </Item>
          </Form>
          <Text
            style={{
              color: '#34495e',
              fontWeight: 'bold',
              alignSelf: 'flex-end',
              fontSize: SCREEN_HEIGHT * 0.026,
              marginTop: SCREEN_HEIGHT * 0.02,
            }}>
            Lupa Kata Sandi ?
          </Text>
          <Button
            style={{
              borderRadius: 10,
              width: '80%',
              height: SCREEN_HEIGHT * 0.065,
              marginHorizontal: SCREEN_WIDTH * 0.02,
              backgroundColor: '#4b7bec',
              elevation: 4,
              marginTop: SCREEN_HEIGHT * 0.05,
              justifyContent: 'center',
              alignSelf: 'center',
            }}
            onPress={() => navigation.navigate('DashboardScreen')}>
            <Text style={{fontWeight: 'bold'}}>Login</Text>
          </Button>
          <Button
            style={{
              borderRadius: 10,
              width: '80%',
              height: SCREEN_HEIGHT * 0.065,
              marginHorizontal: SCREEN_WIDTH * 0.02,
              backgroundColor: '#ffffff',
              borderWidth: 0.2,
              borderColor: '#afafaf',
              elevation: 4,
              marginTop: SCREEN_HEIGHT * 0.04,
              marginBottom: SCREEN_HEIGHT * 0.02,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text style={{fontWeight: 'bold', color: '#4b7bec'}}>Daftar</Text>
          </Button>
          <Text
            style={{
              color: '#34495e',
              fontWeight: 'bold',
              alignSelf: 'center',
              fontSize: SCREEN_HEIGHT * 0.026,
              marginTop: SCREEN_HEIGHT * 0.02,
            }}>
            Login dengan akun
          </Text>
          <Grid style={{marginTop: SCREEN_HEIGHT * 0.01}}>
            <Row>
              <Col
                style={{
                  width: '50%',
                  alignItems: 'flex-end',
                  paddingRight: '2%',
                }}>
                <Icon
                  name="facebook-square"
                  type="FontAwesome"
                  style={{color: '#4b7bec', fontSize: SCREEN_HEIGHT * 0.06}}
                />
              </Col>
              <Col
                style={{
                  width: '50%',
                  alignItems: 'flex-start',
                  paddingLeft: '2%',
                }}>
                <Icon
                  name="google-plus-square"
                  type="FontAwesome"
                  style={{color: '#e74c3c', fontSize: SCREEN_HEIGHT * 0.06}}
                />
              </Col>
              <Col />
            </Row>
          </Grid>
        </View>
      </Content>
    </Container>
  );
});
