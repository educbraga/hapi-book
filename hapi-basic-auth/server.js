const Hapi = require('@hapi/hapi');

const users = {
    john: {
        username: 'john',
        password: 'secret',   // 'secret'
        name: 'John Doe',
        id: '2133d32a'
    }
};

const validate = async (request, username, password, h) => {

    const user = users[username];
    if (!user) {
        return { credentials: null, isValid: false };
    }

    const isValid = await (password === user.password)? true : false;
    const credentials = { id: user.id, name: user.name };

    return { isValid, credentials };
};

const main = async () => {

    const server = Hapi.server({ port: 4000 });

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