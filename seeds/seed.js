/*************************************************
* 
* The purpose of this file is to seed your database 
* with starter data relevant to your application.
*
**************************************************/


const sequelize = require('../config/connection');

const { Bootcamp } = require('../models');
const bingoData = require('./bingo-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Bootcamp.bulkCreate(bingoData, {
    individualHooks: true,
    returning: true,
  });


  process.exit(0);
};

seedDatabase();