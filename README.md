# 🧠 CodeMind – Query Your GitHub Repository Using AI

CodeMind is a **MERN + GenAI powered web application** that allows developers to ask natural language questions about any GitHub repository and receive **context-aware answers** based strictly on the repository’s codebase.

---

## 🚀 Features

* 🔗 Create projects by providing a GitHub repository URL
* 🧩 Automatically parses and chunks repository code
* 🧠 Generates embeddings for semantic code search
* 💬 Ask natural language questions about the repository
* 🎯 Answers are grounded **only in the repository content**
* 🔐 JWT-based authentication
* ⚡ Fast and responsive UI built with React + Vite

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* React Router
* Bootstrap
* Axios

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication

### AI / GenAI

* Embeddings-based semantic search
* Contextual retrieval over repository code
* LLM-powered answer generation

---

## 🔄 How It Works

1. User creates a project using a GitHub repository URL
2. Backend clones the repository and stores it using a **projectId**
3. Code files are chunked and converted into embeddings
4. User asks a question
5. Relevant code chunks are retrieved
6. AI generates an answer **only from retrieved context**

---

## ⚙️ Installation & Setup

### Backend

```bash
cd backend
npm install
node server.js
```

Create a `.env` file:

```
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret
GEMINI_API_KEY=your api key
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🧪 Example Use Case

> **Question:**
> “How is authentication implemented in this repository?”

> **Answer:**
> AI responds with a precise explanation referencing actual files and logic from the repo.

---

## 🎯 Why CodeMind?

* Helps developers understand large codebases faster
* Ideal for onboarding, code reviews, and documentation discovery
* Eliminates guessing — answers are **repo-specific**

---

## 📌 Future Improvements

* Multi-repository projects
* Role-based access control
* Code citation with file + line numbers
* Support for private repositories
* Chat history per project

---

## 👨‍💻 Author

**Niharika**

---

