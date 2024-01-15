const express = require("express");
const data = require("./data");
const PORT = 8000;
const app = express();

app.get("/hi", (require, response) => {
  return response.json(data);
});

app.listen(PORT, () => {
  console.log("conected ");
});
