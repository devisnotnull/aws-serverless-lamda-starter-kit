import { Context, APIGatewayEvent, APIGatewayProxyCallback } from 'aws-lambda';
import { DynamoDB, AWSError } from 'aws-sdk'
import { PutItemOutput, ScanOutput } from 'aws-sdk/clients/dynamodb';

/**
 * 
 * @param event 
 * @param context 
 * @param callback 
 */
export const getById = (event: APIGatewayEvent, context: Context, callback: APIGatewayProxyCallback) => {

  const { id } = event.pathParameters;
  
  // Create a connection to the document client
  const dynamoDb = new DynamoDB.DocumentClient()

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      id: id
    }
  }

  // Push our output into dynamoDB
  dynamoDb.get(params, (error: AWSError, result: PutItemOutput) => {
    // handle potential errors
    if (error) {
      console.error(error)
      callback(new Error('Couldn\'t create the todo item.'))
      return
    }

    // Craft a reponse payload
    const response = {
      statusCode: 200,
      body: JSON.stringify(result, undefined, 2)
    }
    callback(null, response)
  })
};

/**
 * 
 * @param event 
 * @param context 
 * @param callback 
 */
export const getAll = (event: APIGatewayEvent, context: Context, callback: APIGatewayProxyCallback) => {
  
  // Create a connection to the document client
  const dynamoDb = new DynamoDB.DocumentClient()

  var params = {
    TableName: process.env.DYNAMODB_TABLE, // give it your table name 
    Select: "ALL_ATTRIBUTES"
  };

  // Push our output into dynamoDB
  dynamoDb.scan(params, (error: AWSError, result: ScanOutput) => {
    // handle potential errors
    if (error) {
      console.error(error)
      callback(new Error('Couldn\'t create the todo item.'))
      return
    }

    // Craft a reponse payload
    const response = {
      statusCode: 200,
      body: JSON.stringify(result, undefined, 2)
    }
    callback(null, response)
  })
};
