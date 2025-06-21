import { router } from "expo-router";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { supabase } from "../../lib/supabase.js";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (!error) {
      router.replace("/"); // terug naar home
    } else {
      alert(error.message);
    }
  }

  return (
    <View style={{ padding: 20 }}>
      <Text>Email</Text>
      <TextInput
        onChangeText={setEmail}
        value={email}
        style={{ borderWidth: 1 }}
      />
      <Text>Wachtwoord</Text>
      <TextInput
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        style={{ borderWidth: 1 }}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
