# AWS Lambda Function for Lex Bot

This project contains an AWS Lambda function written in Node.js. The function validates a given 4-digit extension number and looks up the extension in a DynamoDB table to get the agent queue ARN. The ARN is then returned as the output of the Lambda function.

## Files

- `src/index.js`: Entry point of the Lambda function. It processes the incoming event using `validateExtension` and `lookupExtension` functions.

- `src/validateExtension.js`: Exports a function `validateExtension` that checks if a string is a valid 4-digit extension number.

- `src/lookupExtension.js`: Exports a function `lookupExtension` that queries the DynamoDB table with a 4-digit extension number and returns the corresponding agent queue ARN.

- `src/getQueueArn.js`: Exports a function `getQueueArn` that returns the agent queue ARN as the output of the Lambda function.

- `package.json`: Configuration file for npm. It lists the dependencies and scripts for the project.

- `.env`: Contains environment variables for the project, such as the AWS credentials and the DynamoDB table name.

## Setup

1. Install the dependencies by running `npm install`.

2. Set up your AWS credentials and the DynamoDB table name in the `.env` file.

3. Deploy the Lambda function to AWS.

## Usage

Invoke the Lambda function with an event containing a 4-digit extension number. The function will validate the extension, look it up in the DynamoDB table, and return the corresponding agent queue ARN.