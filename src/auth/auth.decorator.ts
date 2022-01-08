import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

import { IAuthUser } from './auth.interface';

export const AuthUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): IAuthUser =>
    GqlExecutionContext.create(context).getContext().req.user,
);
