import {ExampleConfig} from './ExampleConfig';

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

const config: DeepPartial<ExampleConfig> = {
  Customer: {
    dbConfig: {
      host: 'prod-db-server',
    },
    credit: {
      initialDays: 30,
    },
  },
};

export {};
module.exports = config;
