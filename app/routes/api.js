let express = require("express");
let router = express();

let dataApi = require("../controller/dataApi.js");

router.get("/api", dataApi.getList);
router.get("/api/details/:id", dataApi.details);
router.post("/add", dataApi.addList);
router.delete("/delete/:id", dataApi.delete);
router.put("/update", dataApi.update);

module.exports = router;
