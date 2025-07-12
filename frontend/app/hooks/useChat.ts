import { useState } from "react";
import { fetchRAG } from "../utils/api";

type Message = { role: "user" | "assistant"; content: string };

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I’m Rezzy. Ask me anything about your medical studies." },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [cards, setCards] = useState<{flashcards:any[];questions:any[]}>({flashcards:[],questions:[]});

  const sendMessage = async () => {
    if (!input.trim()) return;
    setMessages((msgs) => [...msgs, { role: "user", content: input }]);
    setInput("");
    setIsTyping(true);
    setCards({flashcards:[],questions:[]});
    try {
      const res = await fetchRAG(input);
      setCards(res);
      setMessages((msgs) => [
        ...msgs,
        { role: "assistant", content: res.flashcards.length || res.questions.length ? "Here are some relevant results:" : "Sorry, I couldn't find anything relevant." },
      ]);
    } catch (e) {
      setMessages((msgs) => [
        ...msgs,
        { role: "assistant", content: "Sorry, there was an error fetching results." },
      ]);
    }
    setIsTyping(false);
  };

  return { messages, input, setInput, sendMessage, isTyping, cards };
}