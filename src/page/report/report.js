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
} from 'native-base';
import {StatusBar, Dimensions} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

report = ({navigation}) => {
  const [selected2, setSelected2] = useState(undefined);

  const onValueChange = value => {
    setSelected2(value);
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
                  fontSize: SCREEN_HEIGHT * 0.05,
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
                  fontSize: SCREEN_HEIGHT * 0.05,
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
            Nomer Laporan
          </Text>
          <Text style={{fontWeight: 'bold', color: '#273c75'}}>
            MLG/01/V/20/CR02
          </Text>
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
              <Picker.Item label="Jenis Kejahatan" value="key0" />
              <Picker.Item label="CURANMOR" value="key0" />
              <Picker.Item label="Penipuan" value="key1" />
              <Picker.Item label="CURAS" value="key2" />
              <Picker.Item label="Narkoba" value="key3" />
            </Picker>
          </Item>
          <Item floatingLabel style={{marginTop: '2%'}}>
            <Label>Nama Laporan</Label>
            <Input />
          </Item>
          <Item style={{height: '22%', marginTop: '2%'}} floatingLabel>
            <Label>Kronologi Laporan</Label>
            <Input />
          </Item>
          <Icon
            name="location"
            type="Entypo"
            style={{
              paddingTop: '2%',
              color: '#4cd137',
              fontSize: SCREEN_WIDTH * 0.05,
            }}
          />
          <Text
            style={{
              fontWeight: 'bold',
              justifyContent: 'center',
              color: '#273c75',
            }}>
            Polsekta Blimbing
          </Text>
          <Button
            rounded
            style={{
              marginTop: '5%',
              width: '80%',
              justifyContent: 'center',
              backgroundColor: '#f1c40f',
            }}>
            <Text style={{fontWeight: 'bold'}}>Buat Laporan</Text>
          </Button>
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
