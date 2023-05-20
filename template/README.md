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

Zips your Lambda for deployment. For details on how to deploy, see [Deploy Node.js Lambda functions with .zip file archives](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-package.html).
