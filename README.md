# 🧠 Vector Database Demo
This is a minimal demonstration of how to use [ChromaDB](https://docs.trychroma.com/) as a vector database to store and query documents based on semantic similarity.

---

## 📦 Installation

Make sure you have **Node.js**.

```bash
npm install
```

---

## 🗄️ Start the ChromaDB Instance

This project uses a local ChromaDB instance. You can start it with:

```bash
npx chroma run --path ./chroma
```

* This will launch ChromaDB locally.
* All data is stored in the `./chroma` directory.

> ⚠️ Keep this terminal running while executing the script.

---

## ▶️ Run the Demo Script

In a **separate terminal**, run the demo:

```bash
node index.js
```

This script:

1. Creates a collection named `my_collection`
2. Adds 7 example documents with IDs
3. Performs a semantic query: **"What is India?"**
4. Logs the most relevant result

---

## 🖤 License

This project is open-source and MIT-licensed.
