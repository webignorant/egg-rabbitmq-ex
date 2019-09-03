'use strict';

const { createRabbitMQ } = require('./lib/instance');

module.exports = agent => {
  if (agent.config.rabbitmq && (agent.config.rabbitmq.type === 'all' || agent.config.rabbitmq.type === 'agenter')) {
    agent.addSingleton('rabbitmq', createRabbitMQ);
  }
};
