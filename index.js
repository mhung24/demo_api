const express = require("express");
const app = express();
const port = 3000;

let api = require("./app/routes/api.js");
let bdparser = require("body-parser");
app.use(express.json());
app.use("/", api);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
