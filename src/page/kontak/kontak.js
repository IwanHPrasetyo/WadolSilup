import React, {useState, useEffect} from 'react';
import {Container, Content, Text, Thumbnail, Icon, Spinner} from 'native-base';
import {FlatList, View, Dimensions} from 'react-native';
import FabToHome from '../../component/fabToHome';
import database from '@react-native-firebase/database';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const data = [
  {
    nama_kantor: 'Polresta Malang',
    alamat: 'Jl. Slamet Riyadi Malang',
    telp: '(0341) 366444',
    latitude: -7.9716824,
    longitude: 112.6305915,
    image: 'https://ui-avatars.com/api/?size=256&name=Polresta Malang',
  },
  {
    nama_kantor: 'Polsekta Blimbing',
    alamat: 'Jl. Raden Intan No.6 Malang',
    telp: '(0341) 491304',
    latitude: -7.9299114,
    longitude: 112.6483513,
    image: 'https://ui-avatars.com/api/?size=256&name=Polsekta Blimbing',
  },
  {
    nama_kantor: 'Polsekta Kedungkandang',
    alamat: 'Jl. Ki Ageng Gribig 96 Malang',
    telp: '(0341) 325057',
    latitude: -7.9934269,
    longitude: 112.6460037,
    image: 'https://ui-avatars.com/api/?size=256&name=Polsekta Kedungkandang',
  },
  {
    nama_kantor: 'Polsekta Klojen',
    alamat: 'Jl. Kelut 11 Malang',
    telp: '(0341) 361667',
    latitude: -7.9808747,
    longitude: 112.6233234,
    image: 'https://ui-avatars.com/api/?size=256&name=Polsekta Klojen',
  },
  {
    nama_kantor: 'Polsekta Lowokwaru',
    alamat: 'Jl. Lowokwaru-Malang',
    telp: '(0341) 472392',
    latitude: -7.9413999,
    longitude: 112.6071599,
    image: 'https://ui-avatars.com/api/?size=256&name=Polsekta Lowokwaru',
  },
  {
    nama_kantor: 'Polsekta Sukun',
    alamat: 'Jl. Kol Sugiono No.5 Malang',
    telp: '(0341) 368638',
    latitude: -8.0042733,
    longitude: 112.6163261,
    image: 'https://ui-avatars.com/api/?size=256&name=Polsekta Sukun',
  },
];

const kontak = ({navigation}) => {
  const [dataKontak, setDataKontak] = useState([]);

  useEffect(() => {
    getKontak();
  }, []);

  const getKontak = async () => {
    database()
      .ref(`/DataPolsek/`)
      .once('value')
      .then(item => {
        const data = item.val().filter(item => {
          return item != null;
        });
        console.log(item.val());
        setDataKontak(data);
      });
  };

  return (
    <Container>
      <View
        style={{backgroundColor: '#327BF6', flex: 1, justifyContent: 'center'}}>
        {dataKontak.length <= 0 ? (
          <>
            <Spinner style={{alignSelf: 'center'}} />
          </>
        ) : (
          <>
            <FlatList
              data={dataKontak}
              style={{marginTop: 20, marginBottom: 20, zIndex: 1}}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ChatRoomScreen', {data: item})
                  }>
                  <View
                    style={{
                      height: SCREEN_HEIGHT * 0.12,
                      width: '90%',
                      alignSelf: 'center',
                      marginBottom: 10,
                      backgroundColor: '#fff',
                      justifyContent: 'center',
                      paddingLeft: 10,
                      borderRadius: 5,
                      elevation: 2,
                      flexDirection: 'row',
                    }}>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                      <Thumbnail
                        source={{
                          uri: `https://ui-avatars.com/api/?size=256&name=${
                            item.NamaKantor
                          }`,
                        }}
                      />
                    </View>
                    <View
                      style={{
                        flex: 3,
                        justifyContent: 'center',
                        paddingLeft: 10,
                      }}>
                      <Text
                        numberOfLines={1}
                        style={{
                          fontSize: 12,
                          fontWeight: 'bold',
                          color: '#273c75',
                        }}>
                        {item.NamaKantor}
                      </Text>
                      <Text style={{fontSize: 12}}>{item.NomerTelfon}</Text>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                      <Icon
                        name="send"
                        type="FontAwesome"
                        style={{
                          color: '#327BF6',
                        }}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </>
        )}
      </View>
      <FabToHome navigation={navigation} />
    </Container>
  );
};

export default kontak;
