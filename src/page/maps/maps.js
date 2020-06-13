import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'native-base';
import MapView, {Marker} from 'react-native-maps';
import {Location} from '../../helper/Premissions';

const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};

maps = ({navigation}) => {
  const [namaKantor, setNamaKantor] = useState('');
  const [alamatKantor, setAlamatKantor] = useState('');
  const [startLatitude, setStartLatitude] = useState(-8.0068475);
  const [startLongitude, setStartLongitude] = useState(112.6179322);
  const [latitude, setLatitude] = useState(-7.9690962);
  const [longitude, setLongitude] = useState(112.6266054);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    Location();
    setNamaKantor(navigation.getParam('nama_kantor'));
    setAlamatKantor(navigation.getParam('alamat'));
    setLatitude(navigation.getParam('latitude'));
    setLongitude(navigation.getParam('longitude'));
    // await Geolocation.getCurrentPosition(info => {
    //   setLatitude(info.coords.latitude);
    //   setLongitude(info.coords.longitude);
    // });
  };

  return (
    <View style={Styles.container}>
      <MapView
        style={Styles.map}
        region={{
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          title={namaKantor}
          description={alamatKantor}
          image={require('../../asset/image/policeStation.png')}
        />
        <Marker
          coordinate={{
            latitude: startLatitude,
            longitude: startLongitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          title={'Lokasi Anda'}
          description={'Posisi anda disini'}
          image={require('../../asset/image/me.png')}
        />
      </MapView>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default maps;
