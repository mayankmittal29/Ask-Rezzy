export async function fetchRAG(query: string) {
  const res = await fetch("http://localhost:5000/rag", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });
  if (!res.ok) throw new Error("Failed to fetch RAG response");
  return res.json();
}
