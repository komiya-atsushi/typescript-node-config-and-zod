# An example of how to use node-config type safely

## 1. Declare schema of the configuration object using [Zod](https://github.com/colinhacks/zod)

```typescript
import {z} from 'zod';

const ExampleConfigSchema = z.object({
  Customer: z.object({
    dbConfig: z.object({
      host: z.string(),
      port: z.number(),
      dbName: z.string(),
    }),
    credit: z.object({
      initialLimit: z.number(),
      initialDays: z.number(),
    }),
  }),
});

type ExampleConfig = z.infer<typeof ExampleConfigSchema>;

export {ExampleConfigSchema, ExampleConfig};
```
## 2. Write configurations

```typescript
// default.ts
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
```

```typescript
// production.ts
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
```

## 3. Validate configuration object at runtime

```typescript
import rawConfig from 'config';
import {ExampleConfigSchema} from '../config/ExampleConfig';

const config = ExampleConfigSchema.parse(rawConfig);

export default config;
```
