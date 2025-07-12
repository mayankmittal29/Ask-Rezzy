# 🤖📚 Ask Rezzy — Your AI-Powered Study Sidekick 🚀

Welcome to **Ask Rezzy**, the ✨ intelligent GenAI assistant built to make your med-school grind easier, faster, and a lot more fun 🧠💬.

> Think of Rezzy as your **resident genius friend** who’s always ready to:
> - Pull out flashcards from memory 🔁
> - Recall tricky past-year questions 🧾
> - Chat with you in real-time 🧑‍⚕️
> - Answer doubts like a walking textbook 📖💡

---

## 🧭 Why Ask Rezzy?

When you're buried in anatomy books 📚, flipping between chapters, and stressing over “what to revise,” **Rezzy** becomes your:
- 🔍 **Search wizard** for semantically similar questions
- 🧠 **LLM assistant** trained to fetch, retrieve, and reason
- 💬 **Live chatbot** that streams answers word-by-word
- 🪄 **Flashcard flipper** with perfect timing

> “Give me 5 questions on the skeletal system” → Rezzy dives into its brain 🧠 and streams back smartly chosen questions 🧾⚡

---

## 🌈 Demo & Design

🔗 [**Live Demo** on Loom](https://loom.com)  
🎨 [**Figma UI Design**](https://www.figma.com/design/Wk4ao9A1X6HMnivSQwJNVz/Oncourse-Assignments?node-id=3001-917&t=OzeIDYcd8be9TO2e-1)  
📁 [**Drive Link with Dataset**](https://drive.google.com/drive/folders/1Gw8NTQPHoVOy8oEnctd1vpszDDxPQKZ8?usp=drive_link)

---

## 💡 Core Features

| 💼 Feature                | 💬 Description |
|--------------------------|----------------|
| 🔍 **Semantic Vector Search** | Fetches smart matches based on *meaning*, not just keywords |
| 🧠 **RAG (Retrieval + Generation)** | Finds useful content and builds contextual responses |
| 💬 **LLM Chat Interface** | Streams responses token-by-token like magic 🪄 |
| 🧾 **Flashcards & PYQs** | Answerable flashcards and previous-year questions |
| 🧑‍⚕️ **Study Mode UX** | Typing indicators, smooth animations, real-time feel |

---

## 🧱 Tech Stack — Built Different 🔧

| ⚙️ Layer     | 🛠️ Tech Used |
|-------------|--------------|
| 📱 Mobile    | React Native + Expo (SDK 50+) |
| ✨ Language   | TypeScript (strict mode 🧠) |
| 🧭 Navigation | `expo-router` |
| 🚀 Backend   | Express.js (REST + SSE + WebSockets) |
| 🔍 Vector DB | Pinecone / Weaviate / Chroma (you choose!) |
| 🧠 LLM       | OpenAI (Embeddings + Function Calling) |
| ⚡ Real-time | WebSockets (Socket.io) + SSE |
| 🔄 State     | React Query (TanStack) |
| 🧪 Testing   | Jest (for core pipeline) |

---

## 🧬 Dataset Format

```ts
interface Question {
  id: string;
  topic: string;
  subtopic: string;
  question: string;
  type: "multiple_choice" | "true_false" | "short_answer";
  options?: string[];
  correct_answer: string;
  difficulty: "easy" | "medium" | "hard";
  tags: string[];
}

interface Flashcard {
  id: string;
  topic: string;
  subtopic: string;
  front: string;
  back: string;
  difficulty: "easy" | "medium" | "hard";
  tags: string[];
}
