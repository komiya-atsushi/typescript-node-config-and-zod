import rawConfig from 'config';
import {ExampleConfigSchema} from '../config/ExampleConfig';

const config = ExampleConfigSchema.parse(rawConfig);

export default config;
