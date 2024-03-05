const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

const lookupExtension = async (extension) => {
  const params = {
    TableName: process.env.DYNAMODB_TABLE_NAME,
    Key: {
      extension: extension,
    },
  };

  try {
    const data = await dynamoDB.get(params).promise();
    if (data.Item) {
      return data.Item.queueArn;
    } else {
      throw new Error('Extension not found');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = lookupExtension;