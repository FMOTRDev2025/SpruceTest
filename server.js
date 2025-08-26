// server.js (ESM)
import express from "express";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

// SDK is an instance, not a class
const sdk = require("./.api/apis/spruce/index.js");

const app = express();

app.get("/ping", (_req, res) => res.json({ status: "ok" }));

// sample call
app.get("/org", async (_req, res) => {
  try {
    const data = await sdk.organization();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
});

app.listen(process.env.PORT || 3000, () =>
  console.log("Service running on", process.env.PORT || 3000)
);
