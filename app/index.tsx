import { Link } from 'expo-router';
import { Text, View } from "react-native";

export default function HomeScreen(){
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 40, fontStyle: 'Bold' }}>Nineblock</Text>
      <Link href='/game' asChild>
        <Text>New Game</Text>
      </Link>
    </View>
  );
}