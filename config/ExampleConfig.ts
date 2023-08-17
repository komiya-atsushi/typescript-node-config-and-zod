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
