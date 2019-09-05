'use strict';

const { createRabbitMQ } = require('./lib/instance');

module.exports = app => {
  if (app.config.redis.app) {
    app.addSingleton('rabbitmq', createRabbitMQ);
  }
};
