import { Text, View } from "react-native";
import { Protected } from "../../lib/protected";

export default function SettingsScreen() {
  return (
    <Protected>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Welkom bij de instellingenpagina!</Text>
      </View>
    </Protected>
  );
}
