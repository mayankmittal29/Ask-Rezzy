from flask import Flask, request, jsonify
from flask_cors import CORS
import pinecone
import json
from google.cloud import aiplatform

# ==== CONFIGURATION ====
PINECONE_API_KEY = ""
PINECONE_ENVIRONMENT = ""
PINECONE_INDEX_NAME = ""
VERTEX_PROJECT_ID = ""
VERTEX_LOCATION = ""
EMBEDDING_MODEL = ""

# ==== INIT ====
app = Flask(__name__)
CORS(app)

pinecone.init(api_key=PINECONE_API_KEY, environment=PINECONE_ENVIRONMENT)
index = pinecone.Index(PINECONE_INDEX_NAME)
aiplatform.init(project=VERTEX_PROJECT_ID, location=VERTEX_LOCATION)
embedding_model = aiplatform.TextEmbeddingModel(model_name=EMBEDDING_MODEL)


def get_embedding(text):
    return embedding_model.get_embeddings([text])[0].values

@app.route("/rag", methods=["POST"])
def rag():
    data = request.get_json()
    user_query = data.get("query", "")
    if not user_query:
        return jsonify({"error": "No query provided"}), 400
    # 1. Get embedding for query
    embedding = get_embedding(user_query)
    # 2. Search Pinecone
    results = index.query(vector=embedding, top_k=5, include_metadata=True)
    hits = results["matches"]
    # 3. Format response
    flashcards = []
    questions = []
    for hit in hits:
        meta = hit.get("metadata", {})
        if meta.get("type") == "flashcard":
            flashcards.append({
                "front": meta.get("front"),
                "back": meta.get("back"),
                "score": hit.get("score", 0)
            })
        elif meta.get("type") == "question":
            questions.append({
                "question": meta.get("question"),
                "options": meta.get("options", []),
                "answer": meta.get("answer", ""),
                "explanation": meta.get("explanation", ""),
                "score": hit.get("score", 0)
            })
    return jsonify({"flashcards": flashcards, "questions": questions})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
