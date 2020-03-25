import { Context, APIGatewayEvent, APIGatewayProxyCallback } from 'aws-lambda';
import * as uuid from 'uuid'
import { DynamoDB, AWSError } from 'aws-sdk'
import { PutItemOutput } from 'aws-sdk/clients/dynamodb';

/**
 * 
 * @param event 
 * @param context 
 * @param callback 
 */
export const createSingular = (event: APIGatewayEvent, context: Context, callback: APIGatewayProxyCallback) => {

  const timestamp: Date = new Date();

  // Attain our JSON data.
  let data;
  try {
    data = JSON.parse(event.body)
  }
  catch (e) {
    console.log(JSON.stringify(event))
    callback(new Error('The provided body payload is invalid.'))
  }

  // Do we have a todo payload
  if (typeof data?.text !== 'string') {
    console.error('Validation Failed')
    callback(new Error('Couldn\'t create the todo item.'))
    return
  }

  // Create a connection to the document client
  const dynamoDb = new DynamoDB.DocumentClient()

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: uuid.v1(),
      text: data.text,
      checked: false,
      createdAt: timestamp.toDateString(),
      updatedAt: timestamp.toDateString()
    }
  }

  // Push our output into dynamoDB
  dynamoDb.put(params, (error: AWSError, result: PutItemOutput) => {
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
