const express = require("express");
const app = express();
const port = 3000;

// let api = require("./routes/api.js");
let dataApi = require("./app/controller/dataApi.js");

app.get("/api", dataApi.getList);
let bdparser = require("body-parser");
app.use(express.json());
// app.use("/", api);
app.use(cors());
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
