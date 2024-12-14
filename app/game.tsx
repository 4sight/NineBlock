import { Text, View } from 'react-native';
import styles from './styles.css';

export default function Index() {
  
  const tableStyle = {
    borderWidth: 1,
    borderColor: 'black',
  };

  const rowStyle = {
    flexDirection: 'row',
  };

  const cellStyle = {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
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
      <View style={tableStyle}>
        <View style={rowStyle}>
          <View style={cellStyle}></View>
        </View>
      </View>
    </View>
  );
}