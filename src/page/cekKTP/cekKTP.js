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

const cekKTP = ({navigation}) => {
  const [noId, setNoid] = useState();

  const selectKTP = async () => {
    let data = [];
    await database()
      .ref(`/DatabaseKTP/${noId}`)
      .once('value')
      .then(dataUser => {
        data.push(dataUser.val());
      });
    data[0] != null
      ? navigation.navigate('RegisterScreen', {dataKTP: data})
      : Toast.show({
          text: 'data tidak terdaftar',
          type: 'warning',
        });
  };

  return (
    <Container style={Styles.container}>
      <Content>
        <StatusBar backgroundColor="#327BF6" barStyle="light-content" />
        <View style={Styles.mainView}>
          <Icon name="vcard" type="FontAwesome" style={Styles.iconLogo} />
          <View style={Styles.cardForm}>
            <Text style={Styles.tvHallo}>Verifikasi KTP</Text>
            <Input
              onChangeText={data => {
                setNoid(data);
              }}
              placeholder="No KTP"
              style={Styles.inputForm}
            />
            <Row>
              <Col>
                <Button
                  onPress={() => navigation.goBack(null)}
                  style={Styles.btnCancel}>
                  <Icon name="caret-left" type="FontAwesome" />
                </Button>
              </Col>
              <Col>
                <Button
                  info
                  onPress={() => {
                    selectKTP();
                  }}
                  style={Styles.btnSave}>
                  <Icon name="caret-right" type="FontAwesome" />
                </Button>
              </Col>
            </Row>
          </View>
        </View>
      </Content>
    </Container>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#327BF6',
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: SCREEN_WIDTH * 0.06,
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
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: '30%',
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

export default cekKTP;
