const rookout = require('rookout/lambda');
const AWS = require('aws-sdk');
var dynamodb = new AWS.DynamoDB()

exports.handler = rookout.wrap(message => {
  console.log(message);
  let userId = message.pathParameters.id
  let params = {
    TableName: process.env.TABLE_NAME,
    Key: {
      id: { S: userId }
    }
  };

  console.log(`Getting user ${userId} from table ${process.env.TABLE_NAME}`);
  let results = {"name": "test"}; //await dynamodb.getItem(params).promise()
  console.log(`Done: ${JSON.stringify(results)}`);

  return {
    statusCode: 200,
    headers: {},
    body: JSON.stringify(results.Item)
  };
})
