const express = require("express");
const router = express.Router();
const {postXML, getReq} = require("../controllers/autoTestXML");
const test = require("../controllers/method/test");
const AllPrice = require("../method/AllPrice")

router.get("/", getReq);
router.get("/test", test);
router.post("/", postXML);
router.get("/AllPrice", AllPrice)

module.exports = router;