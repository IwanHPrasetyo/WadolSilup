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
} from 'native-base';
import {
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native-gesture-handler';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

register = ({navigation}) => {
  return (
    <Container style={Styles.container}>
      <Content>
        <StatusBar backgroundColor="#327BF6" barStyle="light-content" />
        <View style={Styles.mainView}>
          <Icon name="addusergroup" type="AntDesign" style={Styles.iconLogo} />
          <View style={Styles.cardForm}>
            <Text style={Styles.tvHallo}>Hallo Police</Text>
            <Input placeholder="No KTP" style={Styles.inputForm} />
            <Input placeholder="Nama Lengkap" style={Styles.inputForm} />
            <View style={Styles.radio}>
              <Row>
                <Col>
                  <Left>
                    <Text style={Styles.tvRadio}>Laki - laki</Text>
                  </Left>
                  <Right>
                    <Radio
                      color={'#f0ad4e'}
                      selectedColor={'#5cb85c'}
                      selected={true}
                    />
                  </Right>
                </Col>
                <Col>
                  <Left>
                    <Text style={Styles.tvRadio}>Perempuan</Text>
                  </Left>
                  <Right>
                    <Radio
                      color={'#f0ad4e'}
                      selectedColor={'#5cb85c'}
                      selected={false}
                    />
                  </Right>
                </Col>
              </Row>
            </View>
            <Input placeholder="E-mail" style={Styles.inputForm} />
            <Input placeholder="No. Telp" style={Styles.inputForm} />
            <Input placeholder="Pekerjaan" style={Styles.inputForm} />
            <Textarea
              style={Styles.textArea}
              rowSpan={4}
              bordered
              placeholder="Alamat"
            />
            <Row>
              <Col>
                <Button
                  onPress={() => navigation.goBack()}
                  style={Styles.btnCancel}>
                  <Icon name="close" type="FontAwesome" />
                </Button>
              </Col>
              <Col>
                <Button info style={Styles.btnSave}>
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
              <Text
                style={[
                  Styles.textAkun,
                  {fontWeight: 'bold', marginLeft: SCREEN_WIDTH * 0.02},
                ]}>
                Login
              </Text>
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
    width: SCREEN_HEIGHT * 0.2,
    marginTop: SCREEN_HEIGHT * 0.02,
  },
  btnSave: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    borderColor: '#ffffff',
    borderRadius: 20,
    elevation: 2,
    height: SCREEN_HEIGHT * 0.08,
    width: SCREEN_HEIGHT * 0.2,
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
    fontSize: SCREEN_HEIGHT * 0.05,
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
