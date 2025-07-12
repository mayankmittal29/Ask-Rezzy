import React from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { styles } from "../styles/chat";

export default function TypingIndicator() {
  return (
    <View style={styles.typingIndicator}>
      <ActivityIndicator size="small" color="#4F46E5" />
      <Text style={styles.typingText}>Rezzy is typing...</Text>
    </View>
  );
}