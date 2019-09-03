'use strict';

exports.keys = '123456';

exports.rabbitmq = {
  // Type[RabbitmqType]
  type: 'agenter',
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
