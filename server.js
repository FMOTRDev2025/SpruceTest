// server.js (ESM)
import express from "express";
import SDKModule from "./.api/apis/spruce/index.js";

const SDK = SDKModule?.default ?? SDKModule; // handle CJS/ESM interop
const sdk = new SDK();

const app = express();

app.get("/ping", (_req, res) => {
  res.json({ status: "ok" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Service running on", process.env.PORT || 3000);
});
