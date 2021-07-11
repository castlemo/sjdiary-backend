import { registerEnumType } from '@nestjs/graphql';

export enum GetTodosTypeInput {
  ALL = 'all',
  TODAY = 'today',
  CATEGORY = 'category',
}

registerEnumType(GetTodosTypeInput, {
  name: 'GetTodosTypeInput',
});
