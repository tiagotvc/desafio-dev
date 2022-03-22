module.exports = (sequelize, Sequelize) => {
    const FileData = sequelize.define("fileData", {
      type: {
        type: Sequelize.STRING
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
      time: {
        type: Sequelize.TIME
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

  