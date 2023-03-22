module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('User', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    }, {
      hooks: {
        beforeCreate: async (user) => {
          if (user.password && user.password != '') {
            user.password = await bcrypt.hash(user.password, 10);
          }
        },
      }
    });
    }
  })
  return User;
}