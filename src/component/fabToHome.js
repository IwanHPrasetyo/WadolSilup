import React, {useState, useEffect} from 'react';
import {Icon} from 'native-base';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';

const fabToHome = ({navigation}) => {
  return (
    <View style={styles.fabView}>
      <Icon
        onPress={() => navigation.goBack()}
        style={{fontSize: 25, color: '#ffffff'}}
        type="FontAwesome"
        name="home"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fabView: {
    position: 'absolute',
    top: '80%',
    left: '75%',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 60,
    elevation: 2,
    backgroundColor: '#f9ca24',
  },
});

export default fabToHome;
