'use strict'

const models = require('../models');

// index
// create
// store
// show
// edit
// update
// destroy

async function index(firstName, lastName) {
  try{
    var users = await models.User.findAll({attributes: ["first_name", "last_name"],})
  } catch (error) {
    console.log("error", error);
    throw error
  }
  return users
}

// Tem algo errado aqui. O show não está funcionando. Estou muito cansado para continuar com este livro.
// Vou tentar resolver isso no futuro, mas por enquanto, vou seguir em frente.
// Irei ver a masterclass de sequelize do Diego Fernandes.
// async function show(firstName, email) {
//   console.log("Inside contollers::UserController::show()")
//   try {
//     if (email == "") {
//       users = await models.user.findAll({
//         attributes: ["firstName", "lastName", "email"],
//         where: {
//           firstName: {
//             [Op.like]: firstName
//           }
//         }
//       })
//     } else if (email != "") {
//       users = await models.user.findAll({
//         attributes: ["firstName", "lastName", "email"],
//         where: {
//           [Op.and]: [
//             {
//               firstName: {
//                 [Op.like]: firstName
//               }
//             }, {
//               email: email
//             }
//           ]
//         }
//       })
//     }
//   } catch (error) {
//     console.log("error", error);
//     throw error
//   }
//   return { users }
// }

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
