const { getClient } = require("../clients/dynamodb");

exports.createUser = async ({ username, firstName }) => {
  await getClient()
    .put({
      TableName: process.env.TABLE_NAME,
      Item: {
        username,
        firstName,
      },
    })
    .promise();
  return { username, firstName };
};

exports.getUser = async ({ username }) => {
  const response = await getClient()
    .get({
      TableName: process.env.TABLE_NAME,
      Key: {
        username,
      },
    })
    .promise();

  return response.Item;
};
