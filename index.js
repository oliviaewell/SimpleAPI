const leaderboardService = require('./my-leaderboard-service/handler')

let callback = (err, msg) => {
    if (err) {
        console.error('Error: ', err);
    }
    else {
        console.log('Success: ', msg);
    }
};

let event = {
    "resource": "/leaderboard-service/{proxy+}",
    "path": "/leaderboard-service/game_leaders",
    "httpMethod": "GET",
    "headers": {
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate",
        "cache-control": "no-cache",
        "CloudFront-Forwarded-Proto": "https",
        "CloudFront-Is-Desktop-Viewer": "true",
        "CloudFront-Is-Mobile-Viewer": "false",
        "CloudFront-Is-SmartTV-Viewer": "false",
        "CloudFront-Is-Tablet-Viewer": "false",
        "CloudFront-Viewer-Country": "US",
        "Host": "xisgk2ura0.execute-api.us-east-1.amazonaws.com",
        "Postman-Token": "aad98ddd-5316-4ce3-9947-29a135dff426",
        "User-Agent": "PostmanRuntime/6.1.6",
        "Via": "1.1 9865fbd5c61131fde861cc79a5ba4ead.cloudfront.net (CloudFront)",
        "X-Amz-Cf-Id": "yF-tbP9YFDcy2ep3hkO-H2TzNC5Kdm0EMkdDBiMRTGORw_sT4aoICQ==",
        "X-Amzn-Trace-Id": "Root=1-59dcf2c6-7d11cdf5359c716f7207096e",
        "X-Forwarded-For": "38.140.119.164, 54.240.159.62",
        "X-Forwarded-Port": "443",
        "X-Forwarded-Proto": "https"
    },
    "queryStringParameters": null,
    "pathParameters": {
        "proxy": "game_leaders"
    },
    "stageVariables": null,
    "requestContext": {
        "path": "/dev/leaderboard-service/game_leaders",
        "accountId": "292863690369",
        "resourceId": "vv7spy",
        "stage": "dev",
        "requestId": "9dd79f5e-add6-11e7-b36b-9f9590ea2f4f",
        "identity": {
            "cognitoIdentityPoolId": null,
            "accountId": null,
            "cognitoIdentityId": null,
            "caller": null,
            "apiKey": "",
            "sourceIp": "38.140.119.164",
            "accessKey": null,
            "cognitoAuthenticationType": null,
            "cognitoAuthenticationProvider": null,
            "userArn": null,
            "userAgent": "PostmanRuntime/6.1.6",
            "user": null
        },
        "resourcePath": "/leaderboard-service/{proxy+}",
        "httpMethod": "GET",
        "apiId": "xisgk2ura0"
    },
    "body": null,
    "isBase64Encoded": false
}


leaderboardService.executeRequest(event, null, callback)