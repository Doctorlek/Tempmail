const axios = require('axios');

exports.handler = async function(event, context) {
  const BASE_URL = "https://www.guerrillamail.com/ajax.php";

  try {
    const response = await axios.get(BASE_URL, {
      params: { f: 'get_email_address' }
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to create temp mail" }),
    };
  }
};
