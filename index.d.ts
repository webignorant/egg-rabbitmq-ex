import { Channel } from 'amqplib';

declare module 'egg' {

  const enum RabbitmqType {
    /**
     * run in agenter with worker
     */
    all = 'all',
    /**
     * only run in agenter
     */
    agenter = 'agenter',
    /**
     * only run in all worker
     */
    worker = 'worker',
  }

  interface RabbitmqBinding {
    queue: string;
    key: string;
    options: {
      exclusive: boolean,
      durable: boolean,
      maxPriority: number,
      deadLetterExchange: string,
    };
  }

  interface RabbitmqClient {
    url?: string;
    options?: {
      protocol?: string,
      hostname?: string,
      port?: number,
      username?: string,
      password?: string,
      locale?: string,
    };
    exchange: {
      name: string,
      type: string,
      options: {
        durable: boolean,
      },
      deadLetterExchange: string,
    };
    bindings: RabbitmqBinding[];
  }

  interface Application {
    rabbitmq: typeof Channel;
  }

  interface EggAppConfig {
    rabbitmq: {
      type: RabbitmqType | string,
      clients?: {
        [key: string]: RabbitmqClient;
      },
    };
  }
}
