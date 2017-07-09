module.exports = {
    project: "conso",
    host: "localhost",
    port: 3000,
    publicDir: "./public",
    encoding: "utf8",
    view: {
        engine: "ejs",
        ext: ".ejs",
        dir: "./view",
        cache: true,
        option: {
            delimiter: '%'
        }
    },
    DBConfig: {
        client: 'mysql',
        config: {
            host: '127.0.0.1',
            port: 3306,
            username: 'root',
            password: 'zzxzzx',
            database: 'db1',
            // pool: true // optional for use pool directly
        }
    },
    annotations: {
        enable: false,
        basePackage: "./controller"
    }
};