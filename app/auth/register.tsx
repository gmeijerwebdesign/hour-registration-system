import { router } from "expo-router";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { supabase } from "../../lib/supabase.js";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister() {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (!error) {
      router.replace("/auth/login"); // terug naar home
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
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}
