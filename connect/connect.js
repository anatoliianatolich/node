const mongoose = require('mongoose');
const config = require("../config");
mongoose.connect(config.db, () => {
    console.log("Успешно подключились к БД");
});