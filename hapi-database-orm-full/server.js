const Hapi = require('@hapi/hapi');
const authPlugin = require('/auth');

const main = async () => {

    const server = Hapi.server({ port: 3000 });

    await server.register(require('@hapi/basic'));

    server.auth.strategy('simple', 'basic', { validate });
    server.auth.default('simple');

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, h) {

            return 'welcome';
        }
    });

    await server.start();

    return server;
};

main()
.then((server) => console.log(`Server listening on ${server.info.uri}`))
.catch((err) => {

    console.error(err);
    process.exit(1);
});