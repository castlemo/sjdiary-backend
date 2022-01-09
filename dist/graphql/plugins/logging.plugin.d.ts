import { ApolloServerPlugin, BaseContext, GraphQLRequestContext, GraphQLRequestListener } from 'apollo-server-plugin-base';
export declare class LoggingPlugin implements ApolloServerPlugin {
    requestDidStart(requestContext: GraphQLRequestContext<BaseContext>): Promise<void | GraphQLRequestListener<BaseContext>>;
}
