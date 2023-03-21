'use strict';

const Chance = require('chance');
const chance = new Chance();

const users = [];

// let uniqueModels = chance.unique(chance.word, 100)

for (let i = 1; i < 100; i++) {
  users.push({
    firstName: chance.name().split(' ')[0],
    lastName: chance.name().split(' ')[1],
  });
}

module.exports = {
  async up(queryInterface, Sequelize) {
    try{
      await queryInterface.bulkInsert('Users', users, {});
    }catch(error){
      console.log(error)
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};