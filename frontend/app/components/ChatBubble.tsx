import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/chat";

type Props = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatBubble({ role, content }: Props) {
  return (
    <View style={[styles.message, role === "user" ? styles.user : styles.bot]}>
      <Text style={[styles.messageText, role === "user" && { color: "#fff" }]}>{content}</Text>
    </View>
  );
}