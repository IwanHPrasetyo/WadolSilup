import LocationServicesDialogBox from 'react-native-android-location-services-dialog-box';
import Geolocation from '@react-native-community/geolocation';
import {inLocation} from './Asyncstorage';
export const Location = async () => {
  let data = [];

  await LocationServicesDialogBox.checkLocationServicesIsEnabled({
    message:
      "<h2 style='color: #0af13e'>Use Location ?</h2>This app wants to change your device settings:<br/><br/>Use GPS, Wi-Fi, and cell network for location<br/>",
    ok: 'YES',
    cancel: 'NO',
    enableHighAccuracy: true,
    showDialog: true,
    openLocationServices: true,
    preventOutSideTouch: false,
    preventBackClick: false,
    providerListener: false,
  })
    .then(async function(success) {
      Geolocation.getCurrentPosition(
        info => {
          latitude = info.coords.latitude;
          longitude = info.coords.longitude;
          data.push(latitude, longitude);
          console.log('datanyaa looo2');

          console.log(info.coords.latitude);
          console.log(info.coords.longitude);

          inLocation(data);
          return data;
        },
        error => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: false, timeout: 5000, maximumAge: 10000},
        // {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
      );
    })
    .catch(error => {
      console.log(error.message);
    });
  console.log(data);
  return data;
};
