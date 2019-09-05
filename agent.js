'use strict';

const { createRabbitMQ } = require('./lib/instance');

module.exports = agent => {
  if (agent.config.redis.agent) {
    agent.addSingleton('rabbitmq', createRabbitMQ);
  }
};
