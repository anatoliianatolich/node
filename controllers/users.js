const USERS = require('../mock-data/users');
const {merge} =require('lodash');

module.exports.getUsers = (req, res, next) => {
    req.users = USERS;
    next()
}

module.exports.sendUsers = (req, res, next) => {
    res.status((200))
    res.json(req.users);
}

module.exports.delUser = (req, res, next) => {
    USERS.pop();
    req.users = USERS;
    next()
}

module.exports.putUser = (req, res, next) => {
    const newUser = req.body;
    const index = req.params.index;
    const putUser = [];
    putUser[index] = newUser;
    req.users = merge(USERS, putUser);
    next()
}

module.exports.addUser = (req, res, next) => {
    const user = req.body;
    USERS.push(user);
    req.users = USERS;
    next();
}