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
  Toast,
} from 'native-base';
import {Dimensions, Image, StatusBar, ToastAndroid} from 'react-native';
import Styles from '../../style/style';
import database from '@react-native-firebase/database';
import {loginData, getDataLogin} from '../../helper/Asyncstorage';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

login = ({navigation}) => {
  const [username, setUsername] = useState(false);
  const [password, setPassword] = useState(false);
  let [showPass, setShowPass] = useState(true);
  const [id, setId] = useState();
  const [pass, setPass] = useState();
  const [remember, setRemember] = useState(false);

  useEffect(() => {
    dataLogin();
  }, []);

  const dataLogin = async () => {
    (await getDataLogin()).length > 0
      ? navigation.navigate('DashboardScreen')
      : null;
  };

  const Login = async () => {
    const data = [];
    await database()
      .ref(`/DataPolapor/${id}`)
      .once('value')
      .then(snapshot => {
        data.push(snapshot.val());
      });
    let uid = data[0] != null;
    let passauth = uid ? data[0].password == pass : null;

    uid
      ? passauth
        ? (Toast.show({
            text: 'Login Berhasil',
            type: 'success',
            duration: 800,
          }),
          (await loginData(data))
            ? navigation.navigate('DashboardScreen')
            : null)
        : Toast.show({
            text: 'Password yang anda masukan salah!',
            type: 'warning',
          })
      : Toast.show({
          text: 'Id tidak terdaftar',
          type: 'warning',
        });
  };

  return (
    <Container>
      <Header style={{backgroundColor: '#ffffff', elevation: 0}}>
        <Left
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <Image
            source={require('../../asset/image/policebutton.png')}
            style={{width: '50%', height: '60%'}}
          />
        </Left>
        <Body style={{flex: 5}}>
          <Text
            style={{
              fontSize: SCREEN_HEIGHT * 0.04,
              fontWeight: 'bold',
              color: '#273c75',
            }}>
            .Hallo Police
          </Text>
        </Body>
      </Header>
      <Content>
        <StatusBar backgroundColor="#4b7bec" barStyle="light-content" />
        <View
          style={{
            marginTop: SCREEN_HEIGHT * 0.03,
            paddingHorizontal: SCREEN_WIDTH * 0.1,
          }}>
          <Text
            style={{
              color: '#273c75',
              fontSize: SCREEN_HEIGHT * 0.1,
              fontWeight: 'bold',
            }}>
            Login
          </Text>
          <Text
            style={{
              color: '#273c75',
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
              <Input
                placeholder="NIK"
                onFocus={() => {
                  setUsername(true), setPassword(false);
                }}
                onChangeText={data => {
                  setId(data);
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
              <Input
                placeholder="Password"
                secureTextEntry={showPass}
                onFocus={() => {
                  setUsername(false), setPassword(true);
                }}
                onChangeText={data => {
                  setPass(data);
                }}
              />
              <Icon
                name={showPass ? 'eye-off' : 'eye'}
                type="Feather"
                style={{color: password == true ? '#fbc531' : '#afafaf'}}
                onPress={() => {
                  setShowPass(!showPass);
                }}
              />
            </Item>
          </Form>
          <Text
            style={{
              color: '#273c75',
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
            onPress={() => {
              Login();
            }}>
            <Text style={{fontWeight: 'bold'}}>Login</Text>
          </Button>
          <Button
            onPress={() => navigation.navigate('RegisterScreen')}
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
          <Grid style={{width: SCREEN_WIDTH * 0.7, alignSelf: 'center'}}>
            <Row>
              <Col
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setRemember(!remember);
                  }}>
                  <View
                    style={{
                      height: 20,
                      width: 20,
                      backgroundColor: remember ? '#fbc531' : '#ffffff',
                      borderRadius: 10,
                      marginRight: 10,
                      borderColor: '#fbc531',
                      borderWidth: 2,
                    }}
                  />
                </TouchableOpacity>
              </Col>
              <Col style={{flex: 2}}>
                <Text
                  style={{
                    color: '#273c75',
                    fontWeight: 'bold',
                    fontSize: SCREEN_HEIGHT * 0.026,
                    marginTop: SCREEN_HEIGHT * 0.02,
                  }}>
                  Remember me
                </Text>
              </Col>
            </Row>
          </Grid>
        </View>
      </Content>
    </Container>
  );
};

export default login;
