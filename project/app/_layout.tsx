// app/_layout.tsx
import { Stack } from "expo-router";
import { AuthProvider } from "../lib/auth-context";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
    </AuthProvider>
  );
}
