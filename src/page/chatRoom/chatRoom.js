import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Dimensions,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {
  Text,
  Container,
  Content,
  Header,
  Left,
  Icon,
  Body,
  Right,
  Thumbnail,
  Row,
  Col,
  View,
  Button,
  Input,
  Footer,
  Toast,
} from 'native-base';
import moment from 'moment';
import database from '@react-native-firebase/database';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {getDataLogin} from '../../helper/Asyncstorage';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const chatRoom = ({navigation}) => {
  const [dataPolsek, setDataPolsek] = useState([]);
  const [dataUser, setDataUser] = useState([]);
  const [dataPesan, setDataPesan] = useState([]);
  const [msg, setMsg] = useState();
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    getUser();
    saveData();
  }, [refresh]);

  const saveData = async () => {
    await setDataPolsek(navigation.getParam('data'));
  };

  const getUser = async () => {
    let data = await getDataLogin();
    setDataUser(data);
    getDataPesan(data);
  };

  const getDataPesan = async user => {
    let data = [];
    await database()
      .ref(`Message/${user[0].noIdentitas}/`)
      .once('value')
      .then(async item => {
        await Object.keys(item.val()).map(key => {
          data.push(item.val()[key]);
        });
        setDataPesan(data.reverse());
      });
  };

  const sendMessage = async msg => {
    if (msg.length != 0) {
      let data = {
        pegirim: dataUser[0].noIdentitas,
        pesan: msg,
        penerima: dataPolsek.PolsekID,
        waktu: moment().format('YYYY-MM-DD HH:mm:ss'),
      };

      database()
        .ref(`Message/${dataUser[0].noIdentitas}/${Date.now()}`)
        .set(data)
        .then(() => {
          database()
            .ref(`Message/${dataPolsek.PolsekID}/${Date.now()}`)
            .set(data)
            .then(() => {
              Toast.show({
                text: 'Pesan Terkirim',
                type: 'success',
                duration: 800,
              });
            });
        });
    } else {
      Toast.show({
        text: 'Masukan Pesan Anda',
        type: 'warning',
        duration: 800,
      });
    }
    setRefresh(!refresh);
  };

  return (
    <Container>
      <Header style={Styles.header}>
        <StatusBar backgroundColor="#327BF6" barStyle="light-content" />
        <Left style={{flex: 1}}>
          <Icon
            onPress={() => navigation.goBack()}
            name="arrow-circle-left"
            type="FontAwesome"
            style={Styles.viewIcon}
          />
        </Left>
        <Body style={{flex: 3}}>
          <Row>
            <Col
              style={{
                flex: 1,
                justifyContent: 'center',
              }}>
              <Thumbnail
                small
                source={{
                  uri: `https://ui-avatars.com/api/?size=256&name=${
                    dataPolsek.NamaKantor
                  }`,
                }}
              />
              <View
                style={{
                  backgroundColor: '#44bd32',
                  position: 'absolute',
                  height: '25%',
                  elevation: 5,
                  width: '22%',
                  alignSelf: 'flex-start',
                  left: '-10%',
                  top: '15%',
                  borderRadius: 10,
                }}
              />
            </Col>
            <Col
              style={{
                flex: 2,
                justifyContent: 'center',
              }}>
              <Text
                numberOfLines={1}
                style={{
                  fontWeight: null,
                  color: '#ffffff',
                  fontSize: SCREEN_HEIGHT * 0.026,
                  alignSelf: 'flex-start',
                }}>
                {dataPolsek.NamaKantor}
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  fontWeight: null,
                  color: '#d1d8e0',
                  fontSize: SCREEN_HEIGHT * 0.022,
                  alignSelf: 'flex-start',
                }}>
                Online
              </Text>
            </Col>
          </Row>
        </Body>
        <Right style={{flex: 1, justifyContent: 'center'}}>
          <Icon style={{color: '#ffffff'}} name="phone" type="FontAwesome" />
        </Right>
      </Header>
      <View style={Styles.container}>
        <ScrollView>
          <FlatList
            data={dataPesan}
            renderItem={({item}) => (
              <>
                {item.pegirim == dataUser[0].noIdentitas ? (
                  <View style={Styles.viewPengirim}>
                    <Text style={{color: '#ffffff', fontWeight: 'bold'}}>
                      {item.pesan}
                    </Text>
                  </View>
                ) : (
                  <View
                    style={{
                      alignSelf: 'flex-end',
                      backgroundColor: '#ffffff',
                      elevation: 5,
                      width: SCREEN_WIDTH * 0.5,
                      marginTop: '2%',
                      marginBottom: '2%',
                      paddingHorizontal: '4%',
                      paddingVertical: '3%',
                      borderBottomLeftRadius: 20,
                      borderTopRightRadius: 5,
                      borderTopLeftRadius: 20,
                      borderBottomRightRadius: 20,
                      marginRight: '4%',
                    }}>
                    <Text style={{color: '#273c75', fontWeight: 'bold'}}>
                      {item.pesan}
                    </Text>
                  </View>
                )}
              </>
            )}
          />
        </ScrollView>
      </View>
      <Row
        style={{
          flex: 1,
          paddingVertical: '2%',
          paddingHorizontal: '2%',
          backgroundColor: '#327BF6',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}>
        <Col style={{flex: 4, height: '80%'}}>
          <Input
            onChangeText={data => setMsg(data)}
            style={{
              backgroundColor: '#ffffff',
              height: '80%',
              borderRadius: 5,
              marginLeft: '5%',
            }}
            placeholder="Pesan"
          />
        </Col>
        <Col
          style={{
            flex: 1,
            height: '70%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            onPress={() => {
              sendMessage(msg);
            }}
            style={{color: '#ffffff'}}
            name="rocket"
            type="FontAwesome"
          />
        </Col>
      </Row>
    </Container>
  );
};

const Styles = StyleSheet.create({
  container: {flex: 8},
  header: {
    height: SCREEN_HEIGHT * 0.1,
    paddingTop: '1%',
    backgroundColor: '#327BF6',
  },
  viewPengirim: {
    alignSelf: 'flex-start',
    backgroundColor: '#327BF6',
    width: SCREEN_WIDTH * 0.5,
    marginTop: '2%',
    marginBottom: '2%',
    paddingHorizontal: '4%',
    paddingVertical: '3%',
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 20,
    marginLeft: '4%',
    elevation: 5,
  },
  viewIcon: {
    color: '#ffffff',
    fontSize: SCREEN_WIDTH * 0.1,
    paddingLeft: SCREEN_WIDTH * 0.01,
  },
});

export default chatRoom;
