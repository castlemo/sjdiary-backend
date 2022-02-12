import { ValueTransformer } from 'typeorm';

export * from './util.module';

export const dateTransformer: ValueTransformer = {
  to: (value: any) => {
    console.log('to: ', value);
    return new Date(value).toISOString();
  },
  from: (value: any) => {
    console.log('from: ', value);
    return new Date(value).getTime();
  },
};
