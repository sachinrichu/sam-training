const AWS = require("aws-sdk");

let client = null;

exports.getClient = () => {
  if (client) return client;
  client = new AWS.DynamoDB.DocumentClient();

  return client;
};
