import React, { useRef, useEffect } from "react";
import { View, TextInput, FlatList, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import { useChat } from "../hooks/useChat";
import { styles } from "../styles/chat";
import TypingIndicator from "../components/TypingIndicator";
import ChatBubble from "../components/ChatBubble";

export default function ChatScreen() {
  const { messages, input, setInput, sendMessage, isTyping, cards } = useChat();
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    flatListRef.current?.scrollToEnd({ animated: true });
  }, [messages, isTyping, cards]);

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => <ChatBubble {...item} />}
        contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
      />
      {/* Show flashcards */}
      {cards.flashcards.length > 0 && (
        <View style={{ margin: 8 }}>
          {cards.flashcards.map((card, idx) => (
            <View key={idx} style={{ backgroundColor: '#fff', borderRadius: 12, marginVertical: 6, padding: 14, borderWidth: 1, borderColor: '#E0E7FF', shadowColor: '#000', shadowOpacity: 0.04, shadowRadius: 2, elevation: 1 }}>
              <Text style={{ fontWeight: 'bold', color: '#4F46E5', fontSize: 16 }}>Flashcard</Text>
              <Text style={{ marginTop: 6, fontSize: 15, color: '#111827' }}>{card.front}</Text>
              <Text style={{ marginTop: 4, color: '#64748B', fontStyle: 'italic' }}>{card.back}</Text>
            </View>
          ))}
        </View>
      )}
      {/* Show questions */}
      {cards.questions.length > 0 && (
        <View style={{ margin: 8 }}>
          {cards.questions.map((q, idx) => (
            <View key={idx} style={{ backgroundColor: '#fff', borderRadius: 12, marginVertical: 6, padding: 14, borderWidth: 1, borderColor: '#E0E7FF', shadowColor: '#000', shadowOpacity: 0.04, shadowRadius: 2, elevation: 1 }}>
              <Text style={{ fontWeight: 'bold', color: '#4F46E5', fontSize: 16 }}>Question</Text>
              <Text style={{ marginTop: 6, fontSize: 15, color: '#111827' }}>{q.question}</Text>
              {q.options && q.options.length > 0 && (
                <View style={{ marginTop: 4 }}>
                  {(q.options as string[]).map((opt: string, i: number) => (
                    <Text key={i} style={{ color: '#334155' }}>• {opt}</Text>
                  ))}
                </View>
              )}
              {q.answer && <Text style={{ marginTop: 4, color: '#059669' }}>Answer: {q.answer}</Text>}
              {q.explanation && <Text style={{ marginTop: 2, color: '#64748B', fontStyle: 'italic' }}>{q.explanation}</Text>}
            </View>
          ))}
        </View>
      )}
      {isTyping && <TypingIndicator />}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Ask Rezzy anything..."
          onSubmitEditing={sendMessage}
          returnKeyType="send"
        />
        <TouchableOpacity style={styles.sendBtn} onPress={sendMessage}>
          <Text style={styles.sendBtnText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}