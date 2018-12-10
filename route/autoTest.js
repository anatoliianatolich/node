const express = require("express");
const router = express.Router();
const {postXML, getReq} = require("../controllers/autoTestXML");
const test = require("../controllers/method/test")

router.get("/", getReq);
router.get("/test", test);
router.post("/", postXML);

module.exports = router;