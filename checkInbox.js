const axios = require('axios');

exports.handler = async function(event, context) {
  const { sid_token } = event.queryStringParameters;
  const BASE_URL = "https://www.guerrillamail.com/ajax.php";

  if (!sid_token) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "sid_token is required" }),
    };
  }

  try {
    const response = await axios.get(BASE_URL, {
      params: { f: 'check_email', sid_token: sid_token }
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to check inbox" }),
    };
  }
};
