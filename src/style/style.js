import {StyleSheet, Dimensions} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').height;

const Styles = StyleSheet.create({
  header: {
    color: '#fff',
    backgroundColor: '#fff',
    elevation: 0,
  },
  textHeader: {
    color: '#273c75',
    fontWeight: 'bold',
    fontSize: SCREEN_HEIGHT * 0.06,
  },
  textHeaderLeft: {
    color: '#273c75',
    fontSize: SCREEN_HEIGHT * 0.06,
  },
  rowHeader: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Styles;
