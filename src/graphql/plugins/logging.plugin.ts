import { Plugin } from '@nestjs/graphql';
import {
  ApolloServerPlugin,
  BaseContext,
  GraphQLRequestContext,
  GraphQLRequestContextWillSendResponse,
  GraphQLRequestListener,
} from 'apollo-server-plugin-base';

@Plugin()
export class LoggingPlugin implements ApolloServerPlugin {
  async requestDidStart(
    requestContext: GraphQLRequestContext<BaseContext>,
  ): Promise<void | GraphQLRequestListener<BaseContext>> {
    // console.log('Request started');
    const req = requestContext.request;
    // console.log({ req });

    return {
      async willSendResponse(
        responseContext: GraphQLRequestContextWillSendResponse<BaseContext>,
      ) {
        // console.log(responseContext.context);
        // console.log('Will send response');
      },
    };
  }
}
