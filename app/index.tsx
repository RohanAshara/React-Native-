import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black"
      }}
    >
      <Text style={{color:"white"}}>Hello react native</Text>
      <Link href="/about" style={{color: "white"}}>Go to about</Link>
    </View>
  );
}
