import React, {useState, useEffect} from 'react';
import {Dimensions, StatusBar, SafeAreaView, Modal} from 'react-native';
import {
  Content,
  Header,
  View,
  Text,
  Container,
  Icon,
  Left,
  Body,
  Row,
  Col,
  Grid,
  Badge,
  Thumbnail,
  Fab,
  Button,
  Right,
} from 'native-base';
import {
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {Alert} from 'react-native';
import {StyleSheet} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const dataKantorPolisi = [
  {
    pengirim: 'Polresta Malang',
    pesan: 'Kasus dalam penanganan',
    waktu: '20:00',
    pesanMasuk: 4,
    image: 'https://ui-avatars.com/api/?size=256&name=Polresta Malang',
    // image: require('../../asset/image/polisi2.jpeg'),
  },
  {
    pengirim: 'Polsekta Blimbing',
    pesan: 'Kasus Selesai',
    waktu: '14:28',
    pesanMasuk: 2,
    image: 'https://ui-avatars.com/api/?size=256&name=Polsekta Blimbing',
    // image: require('../../asset/image/polisi3.jpg'),
  },
  {
    pengirim: 'Polsekta Kedungkandang',
    pesan: 'Segera meluncur ke TKP',
    waktu: '08:10',
    pesanMasuk: 1,
    image: 'https://ui-avatars.com/api/?size=256&name=Polsekta Kedungkandang',
    // image: require('../../asset/image/polisi4.jpg'),
  },
  {
    pengirim: 'Polsekta Klojen',
    pesan: 'Laporan akan segera kami proses',
    waktu: '08:15',
    pesanMasuk: 0,
    image: 'https://ui-avatars.com/api/?size=256&name=Polsekta Klojen',
    // image: require('../../asset/image/polisi5.jpg'),
  },
  {
    pengirim: 'Polsekta Lowokwaru',
    pesan: 'Trimakasih atas laporan anda',
    waktu: '03:00',
    pesanMasuk: 2,
    image: 'https://ui-avatars.com/api/?size=256&name=Polsekta Lowokwaru',
    // image: require('../../asset/image/polisi6.jpg'),
  },
  {
    pengirim: 'Polsekta Sukun',
    pesan: 'Kasus dalam penanganan',
    waktu: '10:18',
    pesanMasuk: 0,
    image: 'https://ui-avatars.com/api/?size=256&name=Polsekta Sukun',
    // image: require('../../asset/image/polisi7.jpg'),
  },

  {
    pengirim: 'Polsekta Sukun',
    pesan: 'Kasus dalam penanganan',
    waktu: '10:18',
    pesanMasuk: 0,
    image: 'https://ui-avatars.com/api/?size=256&name=Polsekta Sukun',
    // image: require('../../asset/image/polisi7.jpg'),
  },
  {
    pengirim: 'Polsekta Sukun',
    pesan: 'Kasus dalam penanganan',
    waktu: '10:18',
    pesanMasuk: 0,
    image: 'https://ui-avatars.com/api/?size=256&name=Polsekta Sukun',
    // image: require('../../asset/image/polisi7.jpg'),
  },
  {
    pengirim: 'Polsekta Sukun',
    pesan: 'Kasus dalam penanganan',
    waktu: '10:18',
    pesanMasuk: 0,
    image: 'https://ui-avatars.com/api/?size=256&name=Polsekta Sukun',
    // image: require('../../asset/image/polisi7.jpg'),
  },
];

const chat = ({navigation}) => {
  const [active, setActive] = useState(false);

  return (
    <Container>
      <Header style={{backgroundColor: '#327BF6'}}>
        <StatusBar backgroundColor="#327BF6" barStyle="light-content" />
        <Left>
          <Icon
            onPress={() => navigation.goBack()}
            name="arrow-circle-left"
            type="FontAwesome"
            style={{
              color: '#ffffff',
              fontSize: SCREEN_WIDTH * 0.1,
              paddingLeft: SCREEN_WIDTH * 0.01,
            }}
          />
        </Left>
        <Body>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#ffffff',
              fontSize: SCREEN_WIDTH * 0.05,
              alignSelf: 'flex-start',
            }}>
            .M
            <Text
              style={{
                fontWeight: null,
                color: '#ffffff',
                fontSize: SCREEN_WIDTH * 0.05,
                alignSelf: 'flex-start',
              }}>
              essages
            </Text>
          </Text>
        </Body>
        <Right style={{paddingRight: 20}}>
          <Icon
            onPress={() => navigation.goBack()}
            name="pencil"
            type="FontAwesome"
            style={{
              color: '#ffffff',
              fontSize: SCREEN_WIDTH * 0.08,
            }}
          />
        </Right>
      </Header>
      <Content style={{backgroundColor: '#327BF6'}}>
        <FlatList
          data={dataKantorPolisi}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('ChatRoomScreen')}>
              <Grid
                style={{
                  backgroundColor: '#ffffff',
                  marginHorizontal: '2%',
                  marginVertical: '1%',
                  borderRadius: 10,
                  height: SCREEN_HEIGHT * 0.12,
                  paddingHorizontal: '4%',
                }}>
                <Row>
                  <Col
                    style={{
                      flex: 1.5,
                      justifyContent: 'center',
                    }}>
                    <Thumbnail
                      source={{
                        uri: item.image,
                      }}
                    />
                    {item.pesanMasuk != 0 ? (
                      <View
                        style={{
                          position: 'absolute',
                          backgroundColor: '#f9ca24',
                          paddingHorizontal: '10%',
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 12,
                          top: '6%',
                          left: '45%',
                          paddingVertical: '4%',
                        }}>
                        <Text style={{fontWeight: 'bold', color: '#ffffff'}}>
                          {item.pesanMasuk}
                        </Text>
                      </View>
                    ) : null}
                  </Col>
                  <Col
                    style={{
                      flex: 3.5,
                      justifyContent: 'center',
                    }}>
                    <Text
                      numberOfLines={1}
                      style={{fontWeight: 'bold', color: '#273c75'}}>
                      {item.pengirim}
                    </Text>
                    <Text numberOfLines={1} style={{color: '#afafaf'}}>
                      {item.pesan}
                    </Text>
                  </Col>
                  <Col
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'flex-end',
                    }}>
                    <Text style={{color: '#afafaf', fontWeight: 'bold'}}>
                      {item.waktu}
                    </Text>
                  </Col>
                </Row>
              </Grid>
            </TouchableOpacity>
          )}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={true}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>

              <TouchableHighlight
                style={{...styles.openButton, backgroundColor: '#2196F3'}}
                onPress={() => {
                  // setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
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
    textAlign: 'center',
  },
});

export default chat;
