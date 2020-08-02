import React, {useState, useEffect} from 'react';
import {StatusBar, StyleSheet, Dimensions} from 'react-native';
import {
  Text,
  Header,
  Content,
  Container,
  Icon,
  View,
  Item,
  Label,
  Input,
  Radio,
  Title,
  Col,
  Row,
  Left,
  Right,
  Textarea,
  Button,
  Toast,
} from 'native-base';
import {
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native-gesture-handler';
import database from '@react-native-firebase/database';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

register = ({navigation}) => {
  const [radio, setRadio] = useState(true);
  const [noId, setNoid] = useState('');
  const [nama, setNama] = useState('');
  const [jenisKelamin, setJenisKelamin] = useState('');
  const [email, setEmail] = useState('');
  const [telfon, setTelfon] = useState('');
  const [alamat, setAlamat] = useState('');
  const [password, setPassword] = useState('');

  const radioG = data => {
    setJenisKelamin(data ? 'L' : 'P');
    setRadio(data);
  };
  const registerUser = () => {
    database()
      .ref(`/DataPolapor/${telfon}`)
      .set({
        noIdentitas: noId,
        nama: nama,
        jenisKelamin: jenisKelamin,
        email: email,
        telfon: telfon,
        alamat: alamat,
        password: password,
      })
      .then(() => {
        console.log('Data set.');
        Toast.show({
          text: 'Daftar Berhasil',
          type: 'success',
          duration: 800,
        });
        setTimeout(() => {
          navigation.goBack(null);
        }, 1000);
      });
  };

  return (
    <Container style={Styles.container}>
      <Content>
        <StatusBar backgroundColor="#327BF6" barStyle="light-content" />
        <View style={Styles.mainView}>
          <Icon name="addusergroup" type="AntDesign" style={Styles.iconLogo} />
          <View style={Styles.cardForm}>
            <Text style={Styles.tvHallo}>Hallo Police</Text>
            <Input
              onChangeText={data => {
                setNoid(data);
              }}
              placeholder="No KTP"
              style={Styles.inputForm}
            />
            <Input
              onChangeText={data => setNama(data)}
              placeholder="Nama Lengkap"
              style={Styles.inputForm}
            />
            <View style={Styles.radio}>
              <Row>
                <Col>
                  <Left>
                    <Text style={Styles.tvRadio}>Laki - laki</Text>
                  </Left>
                  <TouchableOpacity onPress={() => radioG(!radio)}>
                    <View
                      style={{
                        height: 20,
                        width: 20,
                        alignSelf: 'center',
                        borderRadius: 20,
                        backgroundColor: radio ? '#f0ad4e' : '#fff',
                        borderColor: '#f0ad4e',
                        borderWidth: 2,
                      }}
                    />
                  </TouchableOpacity>
                </Col>
                <Col>
                  <Left>
                    <Text style={Styles.tvRadio}>Perempuan</Text>
                  </Left>
                  <TouchableOpacity onPress={() => radioG(!radio)}>
                    <View
                      style={{
                        height: 20,
                        width: 20,
                        alignSelf: 'center',
                        borderRadius: 20,
                        backgroundColor: !radio ? '#f0ad4e' : '#fff',
                        borderColor: '#f0ad4e',
                        borderWidth: 2,
                      }}
                    />
                  </TouchableOpacity>
                </Col>
              </Row>
            </View>
            <Input
              onChangeText={data => setEmail(data)}
              placeholder="E-mail"
              style={Styles.inputForm}
            />
            <Input
              keyboardType={'numeric'}
              onChangeText={data => setTelfon(data)}
              placeholder="No. Telp"
              style={Styles.inputForm}
            />
            <Textarea
              onChangeText={data => setAlamat(data)}
              style={Styles.textArea}
              rowSpan={4}
              bordered
              placeholder="Alamat"
            />
            <Input
              secureTextEntry={true}
              onChangeText={data => setPassword(data)}
              placeholder="Password"
              style={Styles.inputForm}
            />
            <Row>
              <Col>
                <Button
                  onPress={() => navigation.goBack(null)}
                  style={Styles.btnCancel}>
                  <Icon name="close" type="FontAwesome" />
                </Button>
              </Col>
              <Col>
                <Button
                  info
                  onPress={() => {
                    registerUser();
                  }}
                  style={Styles.btnSave}>
                  <Icon name="check" type="FontAwesome" />
                </Button>
              </Col>
            </Row>
          </View>
          <Row>
            <Col style={{flex: 1.5, alignItems: 'flex-end'}}>
              <Text style={Styles.textAkun}>Sudah punya akun ?</Text>
            </Col>
            <Col style={{flex: 1, alignItems: 'flex-start'}}>
              <TouchableOpacity onPress={() => navigation.goBack(null)}>
                <Text
                  style={[
                    Styles.textAkun,
                    {fontWeight: 'bold', marginLeft: SCREEN_WIDTH * 0.02},
                  ]}>
                  Login
                </Text>
              </TouchableOpacity>
            </Col>
          </Row>
        </View>
      </Content>
    </Container>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#327BF6',
  },
  btnCancel: {
    backgroundColor: '#fed330',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    borderColor: '#ffffff',
    borderRadius: 20,
    elevation: 2,
    height: SCREEN_HEIGHT * 0.08,
    width: SCREEN_WIDTH * 0.3,
    marginTop: SCREEN_HEIGHT * 0.02,
  },
  btnSave: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    borderColor: '#ffffff',
    borderRadius: 20,
    elevation: 2,
    height: SCREEN_HEIGHT * 0.08,
    width: SCREEN_WIDTH * 0.3,
    marginTop: SCREEN_HEIGHT * 0.02,
  },
  textArea: {
    fontWeight: 'bold',
    backgroundColor: '#dcdde1',
    borderRadius: 10,
  },
  tvHallo: {
    backgroundColor: '#ffffff',
    paddingHorizontal: SCREEN_WIDTH * 0.1,
    borderRadius: 5,
    marginTop: SCREEN_HEIGHT * -0.03,
    fontSize: SCREEN_WIDTH * 0.08,
    fontWeight: 'bold',
    color: '#fed330',
    alignSelf: 'center',
  },
  iconLogo: {
    fontSize: SCREEN_HEIGHT * 0.16,
    color: '#fff',
  },
  inputForm: {
    paddingLeft: SCREEN_WIDTH * 0.05,
    marginTop: SCREEN_HEIGHT * 0.02,
    height: SCREEN_HEIGHT * 0.08,
    backgroundColor: '#dcdde1',
    borderRadius: 10,
    fontWeight: 'bold',
  },
  tvRadio: {
    color: '#273c75',
    fontSize: SCREEN_HEIGHT * 0.03,
    fontWeight: 'bold',
  },
  radio: {
    marginTop: SCREEN_HEIGHT * 0.02,
    alignItems: 'center',
  },
  mainView: {
    paddingTop: SCREEN_HEIGHT * 0.04,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardForm: {
    marginTop: SCREEN_HEIGHT * 0.05,
    marginBottom: SCREEN_HEIGHT * 0.02,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    elevation: 5,
    paddingBottom: SCREEN_WIDTH * 0.07,
    paddingHorizontal: SCREEN_WIDTH * 0.1,
    width: SCREEN_WIDTH * 0.9,
  },
  textAkun: {
    color: '#ffffff',
    marginBottom: SCREEN_HEIGHT * 0.02,
  },
});

export default register;
