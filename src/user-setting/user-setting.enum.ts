import { registerEnumType } from '@nestjs/graphql';

export enum Theme {
  DARK = 'dark',
  WHITE = 'white',
}

export enum StartOfWeek {
  MONDAY = 'monday',
  SUNDAY = 'sunday',
}

registerEnumType(Theme, {
  name: 'Theme',
});

registerEnumType(StartOfWeek, {
  name: 'StartOfWeek',
});
