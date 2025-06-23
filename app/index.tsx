import { useAuth } from "@/lib/auth-context";
import { supabase } from "@/lib/supabase";
import { Button } from "@react-navigation/elements";
import { Link, router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      router.replace("/"); // terug naar home
    } else {
      alert(error.message);
    }
  }

  function LinkButton({ href, label, color }) {
    return (
      <Link href={href} asChild>
        <TouchableOpacity style={[styles.linkButton, { borderColor: color }]}>
          <Text style={[styles.linkText, { color }]}>{label}</Text>
        </TouchableOpacity>
      </Link>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        {user ? `Welkom, ${user.email}` : "Je bent niet ingelogd."}
      </Text>

      <LinkButton href="/settings" label="Instellingen" color="#007bff" />
      {!user && (
        <>
          <LinkButton href="/auth/login" label="Login" color="#dc3545" />
          <LinkButton href="/auth/register" label="Register" color="#6f42c1" />
        </>
      )}
      <LinkButton href="/forms/hours" label="Uren" color="#6f42c1" />

      {user && (
        <View style={{ marginTop: 20 }}>
          <Button onPress={handleLogout}>Logout</Button>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 30,
    fontWeight: "bold",
  },
  loadingText: {
    fontSize: 16,
  },
  linkButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 5,
  },
  linkText: {
    fontSize: 16,
    fontWeight: "500",
  },
});
