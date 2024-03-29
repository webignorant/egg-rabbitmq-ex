'use strict';

/**
 * egg-rabbitmq-node default config
 * @member Config#rabbitmqNode
 * @property {String} SOME_KEY - some description
 */
exports.rabbitmq = {
  // exec on agent or app
  agent: true,
  app: false,
  // Multi Instances
  // clients: {
  //   instance1: {
  //     url: 'amqp://localhost',
  //     options: {},
  //     exchange: {
  //       name: 'xxx',
  //       type: 'direct',
  //       options: {
  //         durable: true,
  //       },
  //       deadLetterExchange: 'xxx',
  //     },
  //     bindings: [{ queue: 'queuename', key: 'key' }],
  //   },
  //   // ...
  // },
};
