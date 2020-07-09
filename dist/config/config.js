"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _path = _interopRequireDefault(require("path"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// const config = () => {
//   console.log('[CONFIG] ', process.env.NODE_ENV);
//   console.log('[PATH]', path.join(__dirname, `env/${process.env.NODE_ENV}`));
//   const environmentConfig = require(path.join(__dirname, `env/${process.env.NODE_ENV}`));
//   console.log('\n[ENVIRONMENT]', environmentConfig);
//   const config = { 
//     ...environmentConfig 
//   };
//   console.log('\n[CONFIG FINAL]', config);
//   return config;
// }
console.log('[CONFIG] ', process.env.NODE_ENV);
console.log('[PATH]', _path["default"].join(__dirname, './env/', process.env.NODE_ENV));

var environmentConfig = require(_path["default"].join(__dirname, "env/".concat(process.env.NODE_ENV)));

console.log('\n[ENVIRONMENT]', environmentConfig);

var config = _objectSpread({}, environmentConfig);

console.log('\n[CONFIG FINAL]', config);
var _default = config;
exports["default"] = _default;