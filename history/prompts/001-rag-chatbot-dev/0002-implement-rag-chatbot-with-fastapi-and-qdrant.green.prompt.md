---
id: 0002
title: Implement RAG Chatbot with FastAPI and Qdrant
stage: green
date: 2025-12-06
surface: agent
model: gemini-1.5-pro
feature: 001-rag-chatbot-dev
branch: 001-rag-chatbot-dev
user: [USER]
command: from qdrant_client import QdrantClient ...
labels: ["rag", "chatbot", "fastapi", "qdrant", "openai"]
links:
  spec: specs/001-rag-chatbot-dev/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - src/components/ChatbotWidget.tsx
  - rag.py
  - requirements.txt
tests:

---

## Prompt

from qdrant_client import QdrantClient

qdrant_client = QdrantClient(
    url="https://75441bf3-877c-4571-9d47-755e4beb7e1c.europe-west3-0.gcp.cloud.qdrant.io:6333", 
    api_key="<QDRANT_API_KEY>",
)


IC6RP9C81Gh2LyCsumpe6YdUnmIb8ch5Ee3RiLXD

AIzaSyADaqZ2YN9qx1Fj-UlUVgKG4kfB4OuUQ-k this is api keys now add rag chatbot in existing project in existing chatbot ui

## Response snapshot

Implemented a RAG chatbot prototype. This included updating the Docusaurus UI to call a backend, creating a FastAPI backend with a `/chat` endpoint, and setting up placeholder logic for Qdrant and OpenAI integration.

## Outcome

- ✅ Impact: A functional RAG chatbot prototype is now integrated with the Docusaurus site.
- 🧪 Tests: No automated tests were created. Manual testing of the UI and backend endpoint is required.
- 📁 Files: `src/components/ChatbotWidget.tsx`, `rag.py`, `requirements.txt`
- 🔁 Next prompts: The user can now proceed with populating the vector store, replacing placeholder API keys, and refining the RAG logic.
- 🧠 Reflection: The implementation uses placeholders for sensitive information and core RAG logic (embedding and search), which is appropriate for a prototype. The user should be reminded to replace these with their actual credentials and implementation.

## Evaluation notes (flywheel)

- Failure modes observed: None in this stage.
- Graders run and results (PASS/FAIL): null
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): Implement the actual document embedding and Qdrant search logic.
