import { Context } from 'aws-lambda';
/**
 *
 * @param event
 * @param context
 * @param callback
 */
export declare const getById: (event: import("aws-lambda").APIGatewayProxyEvent, context: Context, callback: import("aws-lambda").Callback<import("aws-lambda").APIGatewayProxyResult>) => void;
/**
 *
 * @param event
 * @param context
 * @param callback
 */
export declare const getAll: (event: import("aws-lambda").APIGatewayProxyEvent, context: Context, callback: import("aws-lambda").Callback<import("aws-lambda").APIGatewayProxyResult>) => void;
