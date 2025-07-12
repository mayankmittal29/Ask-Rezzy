import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  message: {
    marginVertical: 4,
    padding: 14,
    borderRadius: 16,
    maxWidth: "80%",
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 1,
  },
  user: {
    alignSelf: "flex-end",
    backgroundColor: colors.userBubble,
  },
  bot: {
    alignSelf: "flex-start",
    backgroundColor: colors.botBubble,
  },
  messageText: {
    color: colors.text,
    fontSize: 16,
    lineHeight: 22,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderTopWidth: 1,
    borderColor: colors.border,
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.inputBg,
    marginRight: 8,
  },
  sendBtn: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 10,
  },
  sendBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  typingIndicator: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 16,
    marginBottom: 4,
  },
  typingText: {
    marginLeft: 8,
    color: colors.primary,
    fontStyle: "italic",
  },
});