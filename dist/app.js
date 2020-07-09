"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("./config/config"));

var _index = _interopRequireDefault(require("./routes/index"));

var _business = _interopRequireDefault(require("./routes/business"));

var app = (0, _express["default"])();
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());
app.use(_express["default"]["static"](_path["default"].join(__dirname, '../public')));
console.log("\n[CONFIG APP DB]", _config["default"]["default"].db.uri);

_mongoose["default"].connect(_config["default"]["default"].db.uri, {
  useNewUrlParser: true,
  useCreateIndex: true
}).then(function () {
  console.log("Connected to MongoDB at ".concat(_config["default"]["default"].db.uri));
})["catch"](function (err) {
  console.log("Failed to connect to MongoDB", err);
  process.exit();
});

app.use('/', _index["default"]);
app.use('/users', _business["default"]);
var _default = app;
exports["default"] = _default;