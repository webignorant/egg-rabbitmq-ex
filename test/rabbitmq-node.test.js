'use strict';

const mock = require('egg-mock');

describe('test/rabbitmq-node.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/rabbitmq-node-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, rabbitmqNode')
      .expect(200);
  });
});
