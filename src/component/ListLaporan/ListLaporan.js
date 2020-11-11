import {Button, Col, Grid, Icon, Row, Text, View} from 'native-base';
import React from 'react';
import {Dimensions} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const ListLaporan = ({item, Styles, index}) => {
  return (
    <>
      <Text
        style={{
          paddingHorizontal: 20,
          fontWeight: 'bold',
          color: '#ffffff',
          fontSize: SCREEN_WIDTH * 0.05,
        }}>
        {item.tanggal}
      </Text>
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
                        {item.namaLaporan}
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
                        name="chain"
                        type="FontAwesome"
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
                      <Text numberOfLines={1} style={[Styles.textItem2]}>
                        {item.jenisKriminal}
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
                        name="legal"
                        type="FontAwesome"
                        style={{
                          fontSize: SCREEN_WIDTH * 0.05,
                          color: '#e74c3c',
                        }}
                      />
                    </Col>
                    <Col
                      style={{
                        flex: 8,
                        justifyContent: 'center',
                        marginLeft: SCREEN_WIDTH * 0.01,
                      }}>
                      <Text numberOfLines={1} style={[Styles.textItem2]}>
                        {item.status}
                      </Text>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col style={{justifyContent: 'center'}}>
              <Button style={Styles.button}>
                <Icon name="clipboard-list" type="FontAwesome5" />
              </Button>
            </Col>
          </Row>
        </Grid>
      </View>
    </>
  );
};

export default ListLaporan;
