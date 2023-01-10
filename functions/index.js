const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({origin: true}));

//  app.use(myMiddleware);

app.get("/generateText", (req, res) => {
  const uid = req.uid;
  //  const text = req.text;
  res.json({uid: uid, text: "bruh"}).send().status(200);
});

exports.api = functions.https.onRequest(app);
