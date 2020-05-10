import LocationServicesDialogBox from 'react-native-android-location-services-dialog-box';
// import Geolocation from '@react-native-community/geolocation';
export const Location = async () => {
  LocationServicesDialogBox.checkLocationServicesIsEnabled({
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
    .then(function(success) {
      console.log(success);
      //   getLocation();
    })
    .catch(error => {
      console.log(error.message);
    });
};

// const getLocation = () => {
//   Geolocation.getCurrentPosition(info => console.log(info));
// };
