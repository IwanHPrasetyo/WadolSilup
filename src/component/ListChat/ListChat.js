import React from 'react';
import {Col, Grid, Row, Text, Thumbnail, View} from 'native-base';
import {TouchableOpacity, Dimensions} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const ListChat = ({item, index, navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('ChatRoomScreen')}>
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
  );
};

export default ListChat;
