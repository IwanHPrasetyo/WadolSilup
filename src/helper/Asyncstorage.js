import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const loginData = async data => {
  try {
    await AsyncStorage.setItem('@dataUser', JSON.stringify(data));
    console.log('berhasil simpan data login');
    return true;
  } catch (e) {
    console.log('gagal simpan data login');
    return false;
  }
};

export const getDataLogin = async () => {
  let data = [];
  try {
    const value = await AsyncStorage.getItem('@dataUser');
    if (value !== null) {
      console.log('Berhasil get data login');
      data = JSON.parse(value);
    }
  } catch (e) {
    console.log('Gagal get data login');
  }
  return data;
};

export const inLocation = async data => {
  console.log('simpan dataaa location');
  let dataLocation = {
    la: data[0],
    lo: data[1],
  };
  try {
    await AsyncStorage.setItem('@location', JSON.stringify(dataLocation));
    console.log('berhasil dimpan lokasi');
  } catch (error) {
    console.log('gagal simpan lokasi');
  }
};

export const getInLocation = async () => {
  let data = [];
  try {
    const value = await AsyncStorage.getItem('@location');
    if (value != null) {
      data = JSON.parse(value);
      console.log('berhasil get loaction');
    }
  } catch (error) {
    console.log('gagal get location');
  }
  return data;
};
