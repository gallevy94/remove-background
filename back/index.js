const express = require("express");
const app = express();
const PORT = 5000;

var cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log("running test", PORT);
});
