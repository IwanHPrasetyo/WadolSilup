import React from 'react';
import {Icon, Text, Thumbnail, View} from 'native-base';
import {TouchableOpacity, Dimensions} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const ListKontak = ({navigation, item, index}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ChatRoomScreen', {data: item})}>
      <View
        style={{
          height: SCREEN_HEIGHT * 0.12,
          width: '90%',
          alignSelf: 'center',
          marginBottom: 10,
          backgroundColor: '#fff',
          justifyContent: 'center',
          paddingLeft: 10,
          borderRadius: 5,
          elevation: 2,
          flexDirection: 'row',
        }}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Thumbnail
            source={{
              uri: `https://ui-avatars.com/api/?size=256&name=${
                item.NamaKantor
              }`,
            }}
          />
        </View>
        <View
          style={{
            flex: 3,
            justifyContent: 'center',
            paddingLeft: 10,
          }}>
          <Text
            numberOfLines={1}
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: '#273c75',
            }}>
            {item.NamaKantor}
          </Text>
          <Text style={{fontSize: 12}}>{item.NomerTelfon}</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Icon
            name="send"
            type="FontAwesome"
            style={{
              color: '#327BF6',
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ListKontak;
