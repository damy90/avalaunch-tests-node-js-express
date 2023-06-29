const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.test = require("./test.model")

db.ROLES = ["Registered", "Admin"];

module.exports = db;