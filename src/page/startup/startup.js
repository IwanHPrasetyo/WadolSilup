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

export default startup = ({navigation}) => {
  const [onLogin, setOnlogin] = useState(false);

  return (
    <Container>
      <Header style={Styles.header}>
        <Body style={{justifyContent: 'center'}}>
          <Row style={Styles.rowHeader}>
            <Col style={{flex: 1}}>
              <Text style={Styles.textHeader}>.Hallo</Text>
            </Col>
            <Col style={{flex: 3}}>
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
      <Content>
        <View style={{marginTop: '8%', paddingHorizontal: '10%'}}>
          <Button
            onPress={() => setOnlogin(!onLogin)}
            rounded
            style={{
              backgroundColor: '#273c75',
              justifyContent: 'center',
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
        style={{width: '100%', height: '60%'}}
      />
    </Container>
  );
};