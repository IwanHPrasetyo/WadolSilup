import React, {useState, useEffect} from 'react';
import {Container, Header, Text, Body, Left, Icon, View} from 'native-base';
import {
  ActivityIndicator,
  Dimensions,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {firebase} from '../../helper/FirebaseSync';
import ListKantorPolisi from '../../component/ListKantorPolisi/ListKantorPolisi';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const kantorpolisi = ({navigation}) => {
  const [dataKantorPolisi, setDataKantorPolisi] = useState([]);
  useEffect(() => {
    getPolsek();
  });

  const getPolsek = async () => {
    let conn = firebase.database();
    conn
      .ref(`/DataPolsek/`)
      .once('value')
      .then(item => {
        const data = item.val().filter(item => {
          return item != null;
        });
        setDataKantorPolisi(data);
      });
  };

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
        <Body />
      </Header>

      <View style={Styles.container}>
        <Text
          style={{
            paddingHorizontal: 16,
            fontWeight: 'bold',
            color: '#ffffff',
            fontSize: SCREEN_WIDTH * 0.1,
          }}>
          Daftar Kantor Polisi Kota Malang
        </Text>

        {dataKantorPolisi.length <= 0 ? (
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
              data={dataKantorPolisi}
              renderItem={({item, index}) => (
                <ListKantorPolisi
                  item={item}
                  Styles={Styles}
                  index={index}
                  navigation={navigation}
                />
              )}
              keyExtractor={item => item.NamaKantor}
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
});

export default kantorpolisi;
