module.exports = {
    project: "conso",
    host: "localhost",
    port: 3000,
    public: "./public",
    encoding: "utf8",
    view: {
        engine: "ejs",
        ext: ".ejs",
        dir: "./view",
        cache: false,
        option: {
            delimiter: '%'
        }
    },
    DBConfig: {
        client: 'mongo',
        config: {
            host: '127.0.0.1',
            port: 27017,
            // user: 'root',
            // password: 'zzxzzx',
            database: 'conso_demo',
            // pool: true // optional for use pool directly
        }
    },
    annotations: {
        enable: true,
        basePackage: "./controller"
    }
};