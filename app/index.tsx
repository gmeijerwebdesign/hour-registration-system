import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      {/* Navigation */}
      <Link href={"/settings"}>
        <Text style={{ color: "blue" }}>Instellingen</Text>
      </Link>
      <Link href={"/auth/login"}>
        <Text style={{ color: "red" }}>Login</Text>
      </Link>
      <Link href={"/auth/register"}>
        <Text style={{ color: "purple" }}>Register</Text>
      </Link>
    </View>
  );
}
