import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Container,
  Header,
  Content,
  Icon,
  Body,
  Left,
  Row,
  Col,
  Form,
  Item,
  Label,
  Input,
  Picker,
  Button,
  Grid,
  Toast,
} from 'native-base';
import {StatusBar, Dimensions, ToastAndroid} from 'react-native';
import {getDataLogin, getInLocation} from '../../helper/Asyncstorage';
import {TouchableOpacity} from 'react-native-gesture-handler';
import database from '@react-native-firebase/database';
import {firebase} from '../../helper/FirebaseSync';
import moment from 'moment';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const report = ({navigation}) => {
  const [selected2, setSelected2] = useState(undefined);
  const [selected3, setSelected3] = useState(undefined);
  const [dataUser, setDataUser] = useState();
  const [dataLatitude, setDataLatitude] = useState();
  const [dataLongtitude, setDataLongtitude] = useState();
  const [kronologi, setKronologi] = useState();
  const [namaLaporan, setNamaLaporan] = useState();
  const [dataPolsek, setDataPolsek] = useState([]);
  const [kriminal, setKriminal] = useState([
    {id: 1, jenisKriminal: 'Pencurian Kendaraan Bermotor'},
    {id: 2, jenisKriminal: 'Pencurian dengan Kekerasan'},
    {id: 3, jenisKriminal: 'Narkoba'},
    {id: 4, jenisKriminal: 'Penipuan'},
  ]);
  const onValueChange = value => {
    setSelected2(value);
  };
  const onValueChange2 = value => {
    setSelected3(value);
  };
  useEffect(() => {
    dataLogin();
    getPolsek();
    console.log(selected3);
  }, []);

  const dataLogin = async () => {
    let data = await getDataLogin();
    data.length > 0 ? setDataUser(data) : null;

    let location = await getInLocation();
    location.la != undefined
      ? (setDataLatitude(location.la), setDataLongtitude(location.lo))
      : null;
    console.log('get data locatioon');
    console.log(location.length);
    console.log(location.lo);
  };

  const getPolsek = async () => {
    const conn = firebase.database();
    conn
      .ref(`/DataPolsek/`)
      .once('value')
      .then(item => {
        const data = item.val().filter(item => {
          return item != null;
        });
        setDataPolsek(data);
      });
  };

  const dataLaporan = async () => {
    let data = [];
    await database()
      .ref(`/DataLaporan`)
      .once('value')
      .then(snapshot => {
        data = snapshot.val();
      });
    simpanLaporan(data.length);
  };

  const simpanLaporan = no => {
    database()
      .ref(`/DataLaporan/${no}`)
      .set({
        jenisKriminal: selected2,
        kronologi: kronologi,
        namaPelapor: dataUser[0].nama,
        noLaporan: no,
        namaLaporan: namaLaporan,
        nomerId: dataUser[0].noIdentitas,
        status: 'Proses',
        tanggal: moment().format('l'),
        namaPolse: selected3,
        telfon: dataUser[0].telfon,
        latitude: dataLatitude,
        Longtitude: dataLongtitude,
      })
      .then(() => {
        ToastAndroid.show('Laporan Berhasil', ToastAndroid.SHORT);
        setTimeout(() => {
          navigation.goBack(null);
        }, 1000);
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
        <Body>
          <Row>
            <Col
              style={{
                flex: 1,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#ffffff',
                  fontSize: SCREEN_WIDTH * 0.065,
                  alignSelf: 'flex-start',
                }}>
                .Form
              </Text>
            </Col>
            <Col
              style={{
                flex: 2.4,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: SCREEN_WIDTH * 0.065,
                  alignSelf: 'flex-start',
                }}>
                Laporan
              </Text>
            </Col>
          </Row>
        </Body>
      </Header>
      <Content style={{backgroundColor: '#327BF6'}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#ffffff',
              fontSize: SCREEN_HEIGHT * 0.026,
            }}>
            Formulir Layanan
          </Text>
          <Text style={{fontWeight: 'bold', color: '#ffffff'}}>
            Pengaduan Masyarakat Online
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: '5%',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: '8%',
            paddingHorizontal: '5%',
            height: SCREEN_HEIGHT * 0.7,
            backgroundColor: '#ffffff',
          }}>
          <Text style={{fontWeight: 'bold', color: '#273c75'}}>
            Form Laporan
          </Text>
          {/* <Text style={{fontWeight: 'bold', color: '#273c75'}}>
            MLG/01/V/20/CR02
          </Text> */}
          <Item picker style={{marginTop: '5%'}}>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{width: undefined}}
              placeholder="Select your SIM"
              placeholderStyle={{color: '#bfc6ea'}}
              placeholderIconColor="#007aff"
              selectedValue={selected2}
              onValueChange={data => {
                onValueChange(data);
              }}>
              <Picker.Item
                key={0}
                label={'Jenis Kriminal'}
                value={'Pilih Jenis Kriminal'}
              />
              {kriminal.map(item => (
                <Picker.Item
                  key={item.id}
                  label={item.jenisKriminal}
                  value={item.jenisKriminal}
                />
              ))}
            </Picker>
          </Item>
          <Item floatingLabel style={{marginTop: '2%'}}>
            <Label style={{fontSize: 12}}>Nama Laporan</Label>
            <Input
              onChangeText={data => {
                setNamaLaporan(data);
              }}
            />
          </Item>
          <Item style={{height: '22%', marginTop: '2%'}} floatingLabel>
            <Label style={{fontSize: 12}}>Kronologi Laporan</Label>
            <Input
              onChangeText={data => {
                setKronologi(data);
              }}
            />
          </Item>
          {/* <Icon
            name="location"
            type="Entypo"
            style={{
              paddingTop: '2%',
              color: '#4cd137',
              fontSize: SCREEN_WIDTH * 0.05,
            }}
          /> */}
          <Item picker style={{marginTop: '5%'}}>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{width: undefined}}
              placeholder="Select your SIM"
              placeholderStyle={{color: '#bfc6ea'}}
              placeholderIconColor="#007aff"
              selectedValue={selected3}
              onValueChange={data => {
                onValueChange2(data);
              }}>
              {dataPolsek.map(item => (
                <Picker.Item
                  key={item.NamaKantor}
                  label={item.NamaKantor}
                  value={item.NamaKantor}
                />
              ))}
            </Picker>
          </Item>
          <TouchableOpacity onPress={() => dataLaporan()}>
            <Button
              rounded
              style={{
                marginTop: '5%',
                width: '80%',
                justifyContent: 'center',
                backgroundColor: '#f1c40f',
                alignSelf: 'center',
              }}>
              <Text style={{fontWeight: 'bold'}}>Buat Laporan</Text>
            </Button>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: SCREEN_HEIGHT * 0.02,
              fontWeight: 'bold',
              color: '#273c75',
              marginTop: '2%',
            }}>
            Catatan :{' '}
            <Text
              style={{
                fontSize: SCREEN_HEIGHT * 0.02,
                fontWeight: null,
                color: '#273c75',
              }}>
              Laporan dibuat dengan sebenar benarnya
            </Text>
          </Text>
        </View>
      </Content>
    </Container>
  );
};
export default report;
