import React, {useEffect, useState} from 'react';
import {StatusBar, Image, TouchableOpacity} from 'react-native';
import {
  Container,
  Header,
  Content,
  Text,
  View,
  Body,
  Row,
  Col,
  Button,
  Spinner,
} from 'native-base';
import Styles from '../../style/style';
import database from '@react-native-firebase/database';
import {getDataLogin} from '../../helper/Asyncstorage';
import {ActivityIndicator} from 'react-native';
// import {Location} from '../../helper/Premissions';

const startup = ({navigation}) => {
  const [onLogin, setOnlogin] = useState(false);
  const [onButton, setOnButton] = useState('10%');
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    dataLogin();
    // dataKTP();
    return () => {
      setOnlogin(false);
    };
  });

  const dataKTP = nik => {
    nik = '3509072101930001';
    database()
      .ref(`/DatabaseKTP/${nik}`)
      .set({
        nik: nik,
        nama: 'Indra Kurniawan',
        tempatLahir: 'Jember',
        tanggalLahir: '21-01-1993',
        jenisKelamin: 'Laki-Laki',
        golonganDarah: '-',
        alamat: 'Dukuh Tengah',
        rtrw: '001/002',
        keldesa: 'Bungkal',
        kecamatan: 'Bungkal',
        agama: 'Islam',
        statusPerkawinan: 'Kawin',
        pekerjaan: 'Wiraswasta',
        kewarganegaraan: 'WNI',
      })
      .then(() => {
        console.log('Berhasil Tambah data KTP');
      });
  };

  const dataLogin = async () => {
    (await getDataLogin()).length > 0
      ? navigation.navigate('DashboardScreen')
      : null;
  };

  return (
    <Container>
      <Header style={Styles.header}>
        <Body style={{justifyContent: 'center'}}>
          <Row style={Styles.rowHeader}>
            <Col style={Styles.colHeader}>
              <Text style={Styles.textHeader}>.Hallo</Text>
            </Col>
            <Col>
              <Text style={Styles.textHeaderLeft}>Police</Text>
            </Col>
          </Row>
        </Body>
      </Header>
      <StatusBar backgroundColor="#fff" barStyle="light-content" />
      <View
        style={{
          width: '100%',
          marginTop: '10%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontWeight: 'bold', color: '#273c75'}}>
          Sistem Informasi Pelaporan
        </Text>
        <Text style={{fontWeight: 'bold', color: '#273c75'}}>
          Tindak Kriminal Polres Kota Malang
        </Text>
      </View>
      <Content style={{zIndex: 1}}>
        <View style={{marginTop: '6%', paddingHorizontal: onButton}}>
          <Button
            onPress={() => {
              // onButton == '10%' ? setOnButton('40%') : setOnButton('10%');
              // setOnlogin(!onLogin);
              setTimeout(() => {
                navigation.navigate('LoginScreen');
              }, 1000);
            }}
            rounded
            style={{
              alignSelf: 'center',
              backgroundColor: '#273c75',
              justifyContent: 'center',
              marginBottom: 10,
              elevation: 4,
            }}>
            {onLogin == true ? (
              <ActivityIndicator size="small" color="#Fff" />
            ) : (
              <Text style={{fontWeight: 'bold'}}>Let's Report</Text>
            )}
          </Button>
        </View>
      </Content>
      <Image
        source={require('../../asset/image/startimage.png')}
        style={{width: '100%', height: '60%', zIndex: 2}}
      />
    </Container>
  );
};
export default startup;
