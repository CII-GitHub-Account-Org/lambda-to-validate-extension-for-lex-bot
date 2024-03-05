const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const validateExtension = require('./validateExtension');
const lookupExtension = require('./lookupExtension');

exports.handler = async (event) => {
    const extension = event.currentIntent.slots.Extension;
    
    if (!validateExtension(extension)) {
        return {
            dialogAction: {
                type: 'ElicitSlot',
                message: {
                    contentType: 'PlainText',
                    content: 'The extension number is not valid. Please provide a valid 4 digit extension number.'
                },
                intentName: event.currentIntent.name,
                slots: event.currentIntent.slots,
                slotToElicit: 'Extension'
            }
        };
    }

    try {
        const queueArn = await lookupExtension(dynamoDB, extension);
        return {
            dialogAction: {
                type: 'Close',
                fulfillmentState: 'Fulfilled',
                message: {
                    contentType: 'PlainText',
                    content: `The queue ARN for the extension ${extension} is ${queueArn}.`
                }
            }
        };
    } catch (error) {
        console.error(error);
        throw new Error('Error while looking up extension.');
    }
};