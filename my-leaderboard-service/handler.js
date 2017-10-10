'use strict';

module.exports.executeRequest = (event, context, callback) => {
  let msg = 'Request made!'

  if(event.pathParameters.proxy == 'game_leaders')
  {
    msg = 'game_leaders request made!'
  }
  else if(event.pathParameters.proxy == 'game_awards')
  {
    msg = 'game_awards request made!'
  }
  
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: msg,
      input: event,
    })
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
