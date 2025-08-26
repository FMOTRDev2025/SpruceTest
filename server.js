import express from "express";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

// Load CJS SDK correctly
const SDK = require("./.api/apis/spruce/index.js");

const sdk = new SDK(); // now works

const app = express();
app.get("/ping", (_req, res) => res.json({ status: "ok" }));
app.listen(process.env.PORT || 3000, () =>
  console.log("Service running on", process.env.PORT || 3000)
);
