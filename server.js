// server.js
import express from "express";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

// Require the CJS SDK and normalize exports
const mod = require("./.api/apis/spruce/index.js");
const SDK =
  typeof mod === "function"
    ? mod
    : (mod && typeof mod.default === "function" && mod.default) ||
      (mod && typeof mod.SDK === "function" && mod.SDK);

if (typeof SDK !== "function") {
  throw new Error("SDK constructor not found. Check .api/apis/spruce/index.js export.");
}

const sdk = new SDK();

const app = express();
app.get("/ping", (_req, res) => res.json({ status: "ok" }));
app.listen(process.env.PORT || 3000, () =>
  console.log("Service running on", process.env.PORT || 3000)
);
