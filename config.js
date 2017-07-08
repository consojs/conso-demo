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
        option:{
            delimiter:'%'
        }
    },
    DBConfig: {
        client: 'mysql',
        connection: {
            host: '123.45.67.890',
            port: 3306,
            user: 'ubuntu',
            password: 'welcome1234',
            database: 'db1'
        }
    },
    annotations: {
        enable: false,
        basePackage: "./controller"
    }
};