import { Protected } from "@/lib/protected";
import React from "react";
import { Text, View } from "react-native";

export default function HourScreen() {
  return (
    <Protected>
      <View>
        <Text> Hours</Text>
      </View>
    </Protected>
  );
}
