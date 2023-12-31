import {ExampleConfig} from './ExampleConfig';

const config: ExampleConfig = {
  // Customer module configs
  Customer: {
    dbConfig: {
      host: 'localhost',
      port: 5984,
      dbName: 'customers',
    },
    credit: {
      initialLimit: 100,
      // Set low for development
      initialDays: 1,
    },
  },
};

export {};
module.exports = config;
