import {StyleSheet, Dimensions} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').height;

const Styles = StyleSheet.create({
  header: {
    color: '#fff',
    backgroundColor: '#fff',
    elevation: 0,
  },
  colHeader: {
    width: SCREEN_WIDTH * 0.15,
  },
  colHeader2: {
    backgroundColor: 'red',
  },
  textHeader: {
    color: '#273c75',
    fontWeight: 'bold',
    fontSize: SCREEN_WIDTH * 0.05,
  },
  textHeaderLeft: {
    color: '#273c75',
    fontSize: SCREEN_WIDTH * 0.05,
  },
  rowHeader: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Styles;
