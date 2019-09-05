'use strict';

exports.keys = '123456';

exports.rabbitmq = {
  // only run in agenter
  agent: true,
  // not run in all worker
  app: false,
  // Multi Instances
  clients: {
    instance1: {
      url: 'amqp://localhost',
      options: {},
      exchange: {
        name: 'xxx',
        type: 'direct',
        options: {
          durable: true,
        },
        deadLetterExchange: 'xxx',
      },
      bindings: [{ queue: 'queuename', key: 'key' }],
    },
    // ...
  },
};
