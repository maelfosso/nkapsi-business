#!/usr/bin/env node

/**
 * Module dependencies.
 */

import debugLib from 'debug';
import http from 'http';
import mongoose from 'mongoose';

import app from '../app';

import config from '../config/config';

const debug = debugLib('nkapsi:business-api:server');

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}


/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);


/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? `Pipe ${port}`
    : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
}

/**
 * Listen on provided port, on all network interfaces.
 */

debug('[CONFIG] ', config.db.uri);
mongoose
.connect(config.db.uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
.then(() => {
  debug(`Connected to MongoDB at ${config.db.uri}`);

  server.listen(port);
  server.on('error', onError);
  server.on('listening', onListening);

})
.catch((err) => {
  debug("Failed to connect to MongoDB", err);
  // process.exit();
});

// server.listen(port);
// server.on('error', onError);
// server.on('listening', onListening);
