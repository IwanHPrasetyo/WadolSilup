import React from 'react';
import {Text, View} from 'native-base';
import {Dimensions} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const ListChatRoom = ({item, index, Styles, dataUser}) => {
  return (
    <>
      {item.pegirim == dataUser[0].noIdentitas ? (
        <View style={Styles.viewPengirim}>
          <Text style={{color: '#ffffff', fontWeight: 'bold'}}>
            {item.pesan}
          </Text>
        </View>
      ) : (
        <View
          style={{
            alignSelf: 'flex-end',
            backgroundColor: '#ffffff',
            elevation: 5,
            width: SCREEN_WIDTH * 0.5,
            marginTop: '2%',
            marginBottom: '2%',
            paddingHorizontal: '4%',
            paddingVertical: '3%',
            borderBottomLeftRadius: 20,
            borderTopRightRadius: 5,
            borderTopLeftRadius: 20,
            borderBottomRightRadius: 20,
            marginRight: '4%',
          }}>
          <Text style={{color: '#273c75', fontWeight: 'bold'}}>
            {item.pesan}
          </Text>
        </View>
      )}
    </>
  );
};

export default ListChatRoom;
