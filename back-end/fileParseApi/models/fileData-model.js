module.exports = (sequelize, Sequelize) => {
    const FileData = sequelize.define("fileData", {
      type: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.STRING
      },
      value: {
        type: Sequelize.INTEGER
      },
      cpf: {
        type: Sequelize.STRING
      },
      card: {
        type: Sequelize.STRING
      },
      shop_owner: {
        type: Sequelize.STRING
      },
      shop_name: {
        type: Sequelize.STRING
      }
    });
    return FileData;
  };