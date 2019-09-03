'use strict';

const assert = require('assert');
const RabbitMQ = require('./rabbitmq');

const logPrefix = '[egg-rabbitmq]';

function createRabbitMQ(config, app) {
  assert(
    config.url || (config.options && config.options.hostname),
    'require config.url or config.options.hostname'
  );
  assert(
    config.exchange,
    'require config.exchange'
  );
  assert(
    Array.isArray(config.bindings) && config.bindings.length > 0,
    'require config.bindings'
  );

  const client = new RabbitMQ(config);

  client.on('connect', connection => {
    app.coreLogger.info(`${logPrefix}server connected. connection in ${connection.connection.stream.localAddress}:${connection.connection.stream.localPort}`);
  });

  client.on('close', error => {
    app.coreLogger.info(`${logPrefix}connection closed due to error`, error);
  });

  client.on('error', error => {
    app.coreLogger.info(`${logPrefix}connection error`, error);
  });

  client.on('ch_open', channel => {
    app.coreLogger.info(`${logPrefix}channel opened`, channel);
  });

  client.on('ch_close', () => {
    app.coreLogger.info(`${logPrefix}channel closed`);
  });

  client.on('ch_error', error => {
    app.coreLogger.info(`${logPrefix}channel error`, error);
  });

  client.on('ch_drain', () => {
    app.coreLogger.info(`${logPrefix}channel drain event`);
  });

  app.beforeStart(async () => {
    app.coreLogger.info(`${logPrefix}Connecting RabbitMQ...`);
    await client.init();
  });

  return client;
}

exports.createRabbitMQ = createRabbitMQ;
