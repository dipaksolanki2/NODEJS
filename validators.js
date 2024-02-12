const Hapi = require('@hapi/hapi');
const Joi = require('joi');
const Jpi = require('joi')

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    // Define a route with a handler function
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            // Logic to generate the response
            return 'Hello, world from Hapi Js!';
        }
    });

    server.route({
        method: 'POST',
        path: '/users',
        handler: (request, h) => {
            // Route handler logic
            return 'User created';
        },
        options: {
            validate: {
                payload: Joi.object({
                    username: Joi.string().alphanum().min(3).max(30).required(),
                    email: Joi.string().email().required(),
                    password: Joi.string().required()
                })
            }
        }
    });

    // Start the server
    await server.start();
    console.log(`Server running on ${server.info.uri}`);
};

init();


