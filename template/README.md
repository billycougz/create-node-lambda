# Getting Started with Create Node Lambda

This project was bootstrapped with [Create Node Lambda](https://github.com/billycougz/create-node-lambda).

## Available Scripts

### `npm run event`

Simply runs your `Lambda` handler with a mock `event` object.

Modify the `event` object within `event.js` to meet the specifications of any event.

### `npm run server`

Runs your `Lambda` handler on a local `Express` server to simulate an `API Gateway` or `Function URL` event.

- The `Express` request is transformed into an `API Gateway` event
- The default configuration runs at http://localhost:8080
- Nodemon live reloads the server the when you make changes

### `npm run build`

Zips your Lambda for deployment.

- All `src` files are zipped
- Production dependencies are zipped

## Deployment

The zipped `Lambda` code can be deployed via the command line.

This can be done locally by configuring your `AWS Credentials`, but `AWS CloudShell` is a secure and simple alternative that handles authorization for you.

### Quick Deploy via `AWS CloudShell`

- Ensure you've already created a `Lambda` function in your `AWS Account`
- Zip your `Lambda` code using `npm run build`
- Open `AWS CloudShell` from the `AWS Console`
- Upload your zip `Actions > Upload file`
- Replace `YOUR_FUNCTION_NAME` and `YOUR_ZIP_NAME` in the following command then run it in `CloudShell`

```sh
aws lambda update-function-code --function-name YOUR_FUNCTION_NAME --zip-file fileb://./YOUR_ZIP_NAME.zip
```

> Note: If this isn't your first deploy, make sure to remove the previously uploaded zip from `CloudShell`

### Additional References

For information around provisioning the `Lambda` infrastructure (as opposed to the code deployment) or general information around `Lambda`, see [the AWS docs](https://docs.aws.amazon.com/lambda/latest/dg/getting-started.html).

For additional details around deployment, see [Deploy Node.js Lambda functions with .zip file archives](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-package.html).

For information around `AWS CloudShell` see [the AWS docs](https://docs.aws.amazon.com/cloudshell/latest/userguide/welcome.html).
