const { createUser } = require("./../services/users");

exports.handler = async (event, context) => {
  const { username, firstName } = JSON.parse(event.body);

  const user = await createUser({ username, firstName });
  return {
    statusCode: 200,
    body: JSON.stringify({
      user,
    }),
  };
};
