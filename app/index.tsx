import { Text, View } from "react-native";

export default function Index(){
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 40, fontStyle: 'Bold' }}>Nineblock</Text>
      <button 
        onClick=''
        className=''
      >
        New Game
      </button> 
    </View>
  );
}