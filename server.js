// server.js
import express from "express";
import SDK from "./.api/apis/spruce/index.js";

const app = express();
const sdk = new SDK();

app.get("/ping", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Service running on port", process.env.PORT || 3000);
});
