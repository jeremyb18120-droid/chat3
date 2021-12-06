module.exports = (sequelize, Sequelize) => {
      const Message = sequelize.define("message", {
        pseudo: {
          type: Sequelize.STRING
        },
        title: {
          type: Sequelize.STRING
        },
        content: {
          type: Sequelize.STRING
        }
      });
      return Message;
    };