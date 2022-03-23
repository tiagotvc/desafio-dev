module.exports = {
    HOST: "dbc-mysql",
    USER: "root",
    PASSWORD: "docker",
    DB: "desafio_dev",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };