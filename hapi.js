const Hapi = require('@hapi/hapi');

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

    // Start the server
    await server.start();
    console.log(`Server running on ${server.info.uri}`);
};

init();
