import { registerEnumType } from '@nestjs/graphql';

export enum TodoType {
  ALL = 'all',
  TODAY = 'today',
  CATEGORY = 'category',
}

registerEnumType(TodoType, {
  name: 'TodoType',
});
