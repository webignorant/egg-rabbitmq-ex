import { Channel } from 'amqplib';

declare module 'egg' {
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
    exchange?: {
      name: string,
      type: string,
      options: {
        durable: boolean,
      },
      deadLetterExchange: string,
    };
    bindings?: RabbitmqBinding[];
  }

  interface Application {
    rabbitmq: Channel;
  }

  interface EggAppConfig {
    rabbitmq: {
      agent?: boolean,
      app?: boolean,
      clients?: Record<string, RabbitmqClient>,
    };
  }
}
