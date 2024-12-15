import { Text, View } from 'react-native';
import styles from './styles.css';

export default function Index() {
  
  const boardStyle = {
    borderWidth: 1,
    borderColor: 'black',
  };

  const rowStyle = {
    flexDirection: 'row',
  };

  const cellStyleGrey = {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#cccccc',
    padding: 18,
    flex: 1,
  };

  const cellStyle = {
    borderWidth: 1,
    borderColor: 'black',
    padding: 18,
    flex: 1,
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View style={boardStyle}>
        <View style={rowStyle}>
          <View style={cellStyle}></View>
          <View style={cellStyle}></View>
          <View style={cellStyle}></View>
          <View style={cellStyleGrey}></View>
          <View style={cellStyleGrey}></View>
          <View style={cellStyleGrey}></View>
          <View style={cellStyle}></View>
          <View style={cellStyle}></View>
          <View style={cellStyle}></View>
        </View>
        <View style={rowStyle}>
          <View style={cellStyle}></View>
          <View style={cellStyle}></View>
          <View style={cellStyle}></View>
          <View style={cellStyleGrey}></View>
          <View style={cellStyleGrey}></View>
          <View style={cellStyleGrey}></View>
          <View style={cellStyle}></View>
          <View style={cellStyle}></View>
          <View style={cellStyle}></View>
        </View>
        <View style={rowStyle}>
          <View style={cellStyle}></View>
          <View style={cellStyle}></View>
          <View style={cellStyle}></View>
          <View style={cellStyleGrey}></View>
          <View style={cellStyleGrey}></View>
          <View style={cellStyleGrey}></View>
          <View style={cellStyle}></View>
          <View style={cellStyle}></View>
          <View style={cellStyle}></View>
        </View>
        <View style={rowStyle}>
          <View style={cellStyleGrey}></View>
          <View style={cellStyleGrey}></View>
          <View style={cellStyleGrey}></View>
          <View style={cellStyle}></View>
          <View style={cellStyle}></View>
          <View style={cellStyle}></View>
          <View style={cellStyleGrey}></View>
          <View style={cellStyleGrey}></View>
          <View style={cellStyleGrey}></View>
        </View>
        <View style={rowStyle}>
          <View style={cellStyleGrey}></View>
          <View style={cellStyleGrey}></View>
          <View style={cellStyleGrey}></View>
          <View style={cellStyle}></View>
          <View style={cellStyle}></View>
          <View style={cellStyle}></View>
          <View style={cellStyleGrey}></View>
          <View style={cellStyleGrey}></View>
          <View style={cellStyleGrey}></View>
        </View>
        <View style={rowStyle}>
          <View style={cellStyleGrey}></View>
          <View style={cellStyleGrey}></View>
          <View style={cellStyleGrey}></View>
          <View style={cellStyle}></View>
          <View style={cellStyle}></View>
          <View style={cellStyle}></View>
          <View style={cellStyleGrey}></View>
          <View style={cellStyleGrey}></View>
          <View style={cellStyleGrey}></View>
        </View>
        <View style={rowStyle}>
          <View style={cellStyle}></View>
          <View style={cellStyle}></View>
          <View style={cellStyle}></View>
          <View style={cellStyleGrey}></View>
          <View style={cellStyleGrey}></View>
          <View style={cellStyleGrey}></View>
          <View style={cellStyle}></View>
          <View style={cellStyle}></View>
          <View style={cellStyle}></View>
        </View>
        <View style={rowStyle}>
          <View style={cellStyle}></View>
          <View style={cellStyle}></View>
          <View style={cellStyle}></View>
          <View style={cellStyleGrey}></View>
          <View style={cellStyleGrey}></View>
          <View style={cellStyleGrey}></View>
          <View style={cellStyle}></View>
          <View style={cellStyle}></View>
          <View style={cellStyle}></View>
        </View>
        <View style={rowStyle}>
          <View style={cellStyle}></View>
          <View style={cellStyle}></View>
          <View style={cellStyle}></View>
          <View style={cellStyleGrey}></View>
          <View style={cellStyleGrey}></View>
          <View style={cellStyleGrey}></View>
          <View style={cellStyle}></View>
          <View style={cellStyle}></View>
          <View style={cellStyle}></View>
        </View>
      </View>

      <View>
      </View>

    </View>
  );
}