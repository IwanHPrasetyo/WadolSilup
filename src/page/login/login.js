import React, {useState, useEffect} from 'react';
import {
  Container,
  Header,
  Content,
  View,
  Text,
  Form,
  Item,
  Input,
  Row,
  Col,
} from 'native-base';
import {Dimensions} from 'react-native';
import Styles from '../../style/style';

const SCREEN_HEIGHT = Dimensions.get('window').height;

export default login = ({navigation}) => {
  return (
    <Container>
      <Header style={Styles.header}></Header>
      <Content>
        <View style={{marginTop: SCREEN_HEIGHT * 0.2}}>
          <Row style={Styles.rowHeader}>
            <Col style={{flex: 1}}>
              <Text style={Styles.textHeader}>.Hallo</Text>
            </Col>
            <Col style={{flex: 3}}>
              <Text style={Styles.textHeaderLeft}>Police</Text>
            </Col>
          </Row>
        </View>
        <View
          style={{
            paddingTop: '4%',
            paddingBottom: '4%',
          }}>
          <Form style={{paddingHorizontal: '5%'}}>
            <Input
              style={{
                borderBottomRightRadius: 10,
                borderTopRightRadius: 10,
                borderBottomLeftRadius: 10,
                borderTopLeftRadius: 10,
                borderColor: '#f1c40f',
                borderWidth: 1,
                textAlign: 'center',
                height: SCREEN_HEIGHT * 0.08,
              }}
              placeholder="Username"
            />
            <Input
              style={{
                marginTop: 10,
                borderBottomRightRadius: 10,
                borderTopRightRadius: 10,
                borderBottomLeftRadius: 10,
                borderTopLeftRadius: 10,
                borderColor: '#f1c40f',
                borderWidth: 1,
                textAlign: 'center',
                height: SCREEN_HEIGHT * 0.08,
              }}
              placeholder="Username"
            />
          </Form>
        </View>
      </Content>
    </Container>
  );
};
