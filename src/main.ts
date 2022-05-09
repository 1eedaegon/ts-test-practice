import express from "express";

const app = express();

app.get("/", function (req, res) {
  res.send('hello express');
});

console.log('Now listen');
app.listen(3000);
