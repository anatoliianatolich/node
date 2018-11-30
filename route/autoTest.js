const express = require("express");
const router = express.Router();
const {postXML, getReq} = require("../controllers/autoTestXML");

router.get("/", getReq);
router.post("/", postXML);

module.exports = router; 