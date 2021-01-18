import React, {useState, useEffect} from 'react';
import {
  Container,
  Header,
  Content,
  Text,
  Body,
  Row,
  Col,
  Left,
  Icon,
  View,
  Grid,
  Button,
} from 'native-base';
import {
  Dimensions,
  StatusBar,
  Alert,
  Modal,
  StyleSheet,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import ListLaporan from '../../component/ListLaporan/ListLaporan';

import {firebase} from '../../helper/FirebaseSync';
import {getDataLogin} from '../../helper/Asyncstorage';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const masterlaporan = ({navigation}) => {
  const [dataLaporan, setDataLaporan] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [dataModal, setDataModal] = useState([]);

  useEffect(() => {
    getLaporan();
  }, []);

  const getLaporan = async () => {
    let conn = firebase.database();
    let laporan = conn.ref(`DataLaporan/`);
    let data = await getDataLogin();
    let id = data[0].noIdentitas;

    laporan.on('value', data => {
      let pesan = [];
      data.forEach(item => {
        item.val().nomerId == id ? pesan.push(item.val()) : null;
      });
      setDataLaporan(pesan.reverse());
    });
  };

  return (
    <Container>
      <Header style={{backgroundColor: '#327BF6'}}>
        <StatusBar backgroundColor="#327BF6" barStyle="light-content" />
        <Left style={{flex: 1}}>
          <Icon
            name="th-large"
            type="FontAwesome"
            style={{
              color: '#ffffff',
              fontSize: SCREEN_WIDTH * 0.1,
              paddingLeft: SCREEN_WIDTH * 0.01,
            }}
          />
        </Left>
        <Body style={{flex: 3}}>
          <Modal animationType="fade" transparent={true} visible={modalVisible}>
            <View style={Styles.centeredView}>
              <View style={Styles.modalView}>
                <Icon
                  name="clipboard-list"
                  type="FontAwesome5"
                  style={{
                    color: '#327BF6',
                    fontSize: SCREEN_WIDTH * 0.2,
                    alignSelf: 'center',
                  }}
                />
                <Text style={Styles.modalTitle}>{dataModal.status}</Text>
                <Text style={Styles.modalText}>
                  <Icon
                    name="clipboard"
                    type="Entypo"
                    style={{
                      fontSize: SCREEN_WIDTH * 0.05,
                      color: '#f1c40f',
                    }}
                  />
                  {'  '}
                  {dataModal.namaLaporan}
                </Text>
                <Text style={Styles.modalText}>
                  <Icon
                    name="chain"
                    type="FontAwesome"
                    style={{
                      fontSize: SCREEN_WIDTH * 0.05,
                      color: '#f1c40f',
                      marginRight: 20,
                    }}
                  />
                  {'  '}
                  {dataModal.jenisKriminal}
                </Text>
                <Text style={Styles.modalText}>
                  <Icon
                    name="documents"
                    type="Entypo"
                    style={{
                      fontSize: SCREEN_WIDTH * 0.05,
                      color: '#f1c40f',
                      marginRight: 20,
                    }}
                  />
                  {'  '}
                  {dataModal.kronologi}
                </Text>
                <Text style={Styles.modalText}>
                  <Icon
                    name="car-side"
                    type="FontAwesome5"
                    style={{
                      fontSize: SCREEN_WIDTH * 0.05,
                      color: '#f1c40f',
                      marginRight: 20,
                    }}
                  />
                  {'  '}
                  {dataModal.namaPolse}
                </Text>

                <TouchableHighlight
                  style={{...Styles.openButton, backgroundColor: '#2196F3'}}
                  onPress={() => {
                    setModalVisible(false);
                  }}>
                  <Text style={Styles.textStyle}>Tutup</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
          <Row>
            <Col
              style={{
                width: SCREEN_WIDTH * 0.3,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#ffffff',
                  fontSize: SCREEN_WIDTH * 0.07,
                  alignSelf: 'flex-start',
                }}>
                .Riwayat
              </Text>
            </Col>
            <Col
              style={{
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: SCREEN_WIDTH * 0.07,
                  alignSelf: 'flex-start',
                }}>
                Laporan
              </Text>
            </Col>
          </Row>
        </Body>
      </Header>
      <View style={Styles.container}>
        {dataLaporan <= 0 ? (
          <>
            <ActivityIndicator
              style={{marginTop: '50%'}}
              size="small"
              color="#ffffff"
            />
          </>
        ) : (
          <>
            <FlatList
              data={dataLaporan}
              renderItem={({item, index}) => (
                <ListLaporan
                  item={item}
                  Styles={Styles}
                  index={index}
                  setModalVisible={setModalVisible}
                  setDataModal={setDataModal}
                />
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </>
        )}
      </View>
    </Container>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#327BF6',
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  textItem: {
    color: '#273c75',
    fontWeight: 'bold',
  },
  textItem2: {
    color: '#273c75',
    fontSize: SCREEN_HEIGHT * 0.026,
  },
  button: {
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1289A7',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    width: '80%',
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'left',
  },
  modalTitle: {
    marginTop: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    color: '#fff',
    backgroundColor: '#fed330',
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default masterlaporan;
