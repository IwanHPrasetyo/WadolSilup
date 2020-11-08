import {Button, Col, Grid, Icon, Row, Text} from 'native-base';
import React from 'react';
import {Dimensions, View} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const ListKantorPolisi = ({item, Styles, index, navigation}) => {
  return (
    <View style={Styles.item}>
      <Grid>
        <Row>
          <Col style={{flex: 3}}>
            <Row>
              <Col>
                <Row>
                  <Col
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Icon
                      name="car-alt"
                      type="FontAwesome5"
                      style={{
                        fontSize: SCREEN_WIDTH * 0.05,
                        color: '#327BF6',
                      }}
                    />
                  </Col>
                  <Col
                    style={{
                      flex: 8,
                      justifyContent: 'center',
                      marginLeft: SCREEN_WIDTH * 0.01,
                    }}>
                    <Text numberOfLines={1} style={Styles.textItem}>
                      {item.nama_kantor}
                    </Text>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row style={{marginTop: SCREEN_HEIGHT * 0.006}}>
              <Col>
                <Row>
                  <Col
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Icon
                      name="location-pin"
                      type="Entypo"
                      style={{
                        fontSize: SCREEN_WIDTH * 0.05,
                        color: '#f1c40f',
                      }}
                    />
                  </Col>
                  <Col
                    style={{
                      flex: 8,
                      justifyContent: 'center',
                      marginLeft: SCREEN_WIDTH * 0.01,
                    }}>
                    <Text numberOfLines={1} style={Styles.textItem2}>
                      {item.alamat}
                    </Text>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col>
            <Button
              // onPress={() =>
              //   navigation.navigate('MapScreen', {
              //     nama_kantor: item.nama_kantor,
              //     alamat: item.alamat,
              //     latitude: item.latitude,
              //     longitude: item.longitude,
              //   })
              // }
              style={Styles.button}>
              <Icon name="map-pin" type="Feather" />
            </Button>
          </Col>
        </Row>
      </Grid>
    </View>
  );
};

export default ListKantorPolisi;
