"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _process$env = process.env,
    MONGO_DB = _process$env.MONGO_DB,
    MONGO_HOST = _process$env.MONGO_HOST,
    MONGO_HOSTNAME = _process$env.MONGO_HOSTNAME,
    MONGO_USERNAME = _process$env.MONGO_USERNAME,
    MONGO_PORT = _process$env.MONGO_PORT,
    MONGO_PASSWORD = _process$env.MONGO_PASSWORD;
var config = {
  db: {
    hostname: MONGO_HOSTNAME || MONGO_HOST || '127.0.0.1',
    username: MONGO_USERNAME || '',
    password: MONGO_PASSWORD || '',
    port: MONGO_PORT || '27017',
    db: MONGO_DB || 'nkapsi_business_development',
    uri: "mongodb://".concat(MONGO_USERNAME, ":").concat(MONGO_PASSWORD, "@").concat(MONGO_HOSTNAME, ":").concat(MONGO_PORT, "/").concat(MONGO_DB, "?authSource=admin")
  }
};
var _default = config;
exports["default"] = _default;