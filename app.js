'use strict';

const { createRabbitMQ } = require('./lib/instance');

module.exports = app => {
  if (app.config.rabbitmq && (app.config.rabbitmq.type === 'all' || app.config.rabbitmq.type === 'worker')) {
    app.addSingleton('rabbitmq', createRabbitMQ);
  }
};
