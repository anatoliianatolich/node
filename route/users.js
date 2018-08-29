var express = require('express');
var router = express.Router();
const {getUsers, sendUsers, delUser, putUser, addUser
} = require("../controllers/users");


router.get("/", getUsers, sendUsers);

router.post("/", addUser, sendUsers);

router.delete('/:index/', delUser, sendUsers);

router.put('/:index/', putUser, sendUsers);

module.exports = router;