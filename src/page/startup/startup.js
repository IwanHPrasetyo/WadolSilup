import React, {useState, useEffect} from 'react';
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
// import {Location} from '../../helper/Premissions';

startup = ({navigation}) => {
  const [onLogin, setOnlogin] = useState(false);
  const [onButton, setOnButton] = useState('10%');

  useEffect(() => {
    // Location();
  }, []);

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
              onButton == '10%' ? setOnButton('40%') : setOnButton('10%');
              setOnlogin(!onLogin);
              setTimeout(() => {
                navigation.navigate('LoginScreen');
              }, 1000);
            }}
            rounded
            style={{
              backgroundColor: '#273c75',
              justifyContent: 'center',
              marginBottom: 10,
              elevation: 4,
            }}>
            {onLogin == true ? (
              <Spinner color="#fff" />
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
