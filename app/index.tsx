import { useAuth } from "@/lib/auth-context";
import { supabase } from "@/lib/supabase";
import { Button } from "@react-navigation/elements";
import { Link, router } from "expo-router";
import { Text, View } from "react-native";
export default function Index() {
  const { user, loading } = useAuth();

  if (loading) {
    return <Text>Loading...</Text>;
  }

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      router.replace("/"); // terug naar home
    } else {
      alert(error.message);
    }
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>
        {user ? (
          <Text>Welkom, {user.email}</Text>
        ) : (
          <Text>Je bent niet ingelogd.</Text>
        )}
      </Text>
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
      <Button onPress={handleLogout}>Logout</Button>
    </View>
  );
}
