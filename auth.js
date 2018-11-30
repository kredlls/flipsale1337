'use strict';

const GFAPI_KEY = process.env.GFAPI_KEY;
const GFAPI_SECRET = process.env.GFAPI_SECRET;

const Speakeasy = require('speakeasy');

const secret = {
    secret: GFAPI_SECRET,
    encoding: 'base32',
    algorithm: 'sha1'
};

console.log(`Authorization: GFAPI ${GFAPI_KEY}:${Speakeasy.totp(secret)}`);
