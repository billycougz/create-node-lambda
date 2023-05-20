require('dotenv').config();
const { handler } = require('../src/index');

const event = {};

handler(event);
