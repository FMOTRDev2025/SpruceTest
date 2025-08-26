// server.js (ESM)
import express from "express";
import OpenAI from "openai";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const sdk = require("./.api/apis/spruce/index.js"); // your Spruce SDK instance

const app = express();
app.use(express.json());

// OpenAI client
const ai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Basic chat endpoint (Responses API, recommended)
app.post("/ai/chat", async (req, res) => {
  try {
    const { input } = req.body; // string or array of content parts
    const model = process.env.OPENAI_MODEL || "gpt-4o-mini";
    const resp = await ai.responses.create({ model, input });
    res.json({ text: resp.output_text });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
});

// Optional: classic Chat Completions
app.post("/ai/chat-legacy", async (req, res) => {
  try {
    const { messages } = req.body; // [{role:'user',content:'hi'}]
    const model = process.env.OPENAI_MODEL || "gpt-4o-mini";
    const out = await ai.chat.completions.create({ model, messages });
    res.json({ text: out.choices[0]?.message?.content });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
});

app.get("/ping", (_req, res) => res.json({ status: "ok" }));
app.listen(process.env.PORT || 3000, () =>
  console.log("Service running on", process.env.PORT || 3000)
);
