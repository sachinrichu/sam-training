const { getUser } = require("./../services/users");

exports.handler = async (event, context) => {
  const { username } = event.pathParameters;
  const user = await getUser({ username });
  const statusCode = user ? 200 : 404;
  return {
    statusCode,
    body: JSON.stringify({
      ...user,
    }),
  };
};
