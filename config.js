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
    dbConfig: {
        client: 'mysql',
        host: "localhost",
        port: 3306,
        dbName: "customers",
        author: {
            username: 'admin',
            password: 'password'
        }
    },
    annotations: {
        enable: false,
        basePackage: "./controller"
    }
};