'use strict'

const models = require('../models');

// index
// create
// store
// show
// edit
// update
// destroy

async function show(firstName, email) {
  console.log("Inside contollers::UserController::show()")
  try {
    if (email == "") {
      users = await models.user.findAll({
        attributes: ["firstName", "lastName", "email"],
        where: {
          firstName: {
            [Op.like]: firstName
          }
        }
      })
    } else if (email != "") {
      users = await models.user.findAll({
        attributes: ["firstName", "lastName", "email"],
        where: {
          [Op.and]: [
            {
              firstName: {
                [Op.like]: firstName
              }
            }, {
              email: email
            }
          ]
        }
      })
    }
  } catch (error) {
    console.log("error", error);
    throw error
  }
  return { users }
}

async function create(firstName, lastName, password, email) {
  console.log("Inside contollers::UserController::create()")
  var result = {};
  try {
    var user = await models.User.build({
      first_name: firstName,
      last_name: lastName,
      password: password,
      email: email,
    }).save()
    result = user.toJSON();
  } catch (error) {
    console.log('O erro é: ', error);
  }
  return result;
}

module.exports = {
  create,
  show,
}
