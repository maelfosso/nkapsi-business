"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var BusinessSchema = new _mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  description: String,
  website: String,
  activities: [{
    type: String
  }],
  delivrables: [{
    String: String
  }]
});
var Business = (0, _mongoose.model)('Business', BusinessSchema);
var _default = Business; // mocha --require @babel/register --timeout 10000 --recursive --exit"

exports["default"] = _default;