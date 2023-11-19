const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
    generateJWT: function() {
        let value = jwt.sign(
            {
              iss: process.env.ISS,
              sub: uuidv4(), // Unique token identifier
              uid: 'beta', // User identifier
              iat: Math.floor(Date.now() / 1000),
              exp: Math.floor(Date.now() / 1000) + 60
            },
            process.env.API_KEY,
            { algorithm: 'HS256' }
        );

        return value;
    }
};