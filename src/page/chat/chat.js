import React, {useState, useEffect} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {View, Container, Spinner} from 'native-base';
import FabHome from '../../component/fabToHome';
import {firebase} from '../../helper/FirebaseSync';
import {FlatList} from 'react-native-gesture-handler';
import ListChat from '../../component/ListChat/ListChat';
import {getDataLogin} from '../../helper/Asyncstorage';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const chat = ({navigation}) => {
  const [active, setActive] = useState(false);
  const [kantorPenerima, setKantorPenerima] = useState([]);
  const [idUser, setIdUser] = useState();

  useEffect(() => {
    getPesan();
  }, []);

  const getPesan = async () => {
    let data = await getDataLogin();
    let conn = firebase.database();
    let message = conn.ref(`Message/${data[0].noIdentitas}/`);
    setIdUser(data[0].noIdentitas);

    message.on('value', dataPesan => {
      let idUser = [];
      let idUserFix = [];
      let pesan = [];
      let dataPenerima = [];
      dataPesan.forEach(item => {
        item.val().pegirim != data[0].noIdentitas
          ? (idUser.push(parseInt(item.val().pegirim)),
            pesan.push(item.val()),
            dataPenerima.push({
              namaPolsek: item.val().namaPolsek,
              pengirim: item.val().pegirim,
              penerima: item.val().penerima,
            }))
          : item.val().penerima != data[0].noIdentitas
          ? (idUser.push(parseInt(item.val().penerima)),
            pesan.push(item.val()),
            dataPenerima.push({
              namaPolsek: item.val().namaPolsek,
              pengirim: item.val().pegirim,
              penerima: item.val().penerima,
            }))
          : null;
      });
      const unique = [...new Set(idUser)];
      const namaUnique = [...new Set(dataPenerima)];
      setKantorPenerima(namaUnique);
    });
  };

  const getDataPolsek = item => {
    let idPenerima = item.pengirim != idUser ? item.pengirim : item.penerima;
    let db = firebase.database();
    let msg = db.ref(`DataPolsek/${idPenerima}/`);

    msg.on('value', data => {
      let dataPolsek = null;
      dataPolsek = data.val();
      navigation.navigate('ChatRoomScreen', {data: dataPolsek});
    });
  };

  return (
    <View style={{flex: 1, backgroundColor: '#327BF6'}}>
      {kantorPenerima.length <= 0 ? (
        <Spinner style={{alignSelf: 'center'}} />
      ) : (
        <FlatList
          data={kantorPenerima}
          initialNumToRender={7}
          style={{marginTop: 16, marginBottom: 16, zIndex: 1}}
          renderItem={({item, index}) => (
            <ListChat
              item={item}
              navigation={navigation}
              index={index}
              getDataPolsek={getDataPolsek}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
      <FabHome navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabView: {
    position: 'absolute',
    top: '80%',
    left: '75%',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 60,
    elevation: 2,
    backgroundColor: '#f9ca24',
  },
  modalView: {
    height: '90%',
    width: '90%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
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
