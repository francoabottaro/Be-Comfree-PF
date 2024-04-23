//? Dependencies
const { Sequelize, or } = require("sequelize");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

//? SQL Connection
const { DB_USER, DB_PASSWORD, DB_HOST, DB } = process.env;
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB}`,
  { logging: false }
);

const basename = path.basename(__filename);
const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    file =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach(file => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach(model => model(sequelize));

//? Models relations
const { product, user, cart, stock, favorite, order, googleUser } =
  sequelize.models;

user.belongsToMany(product, { through: { model: cart, unique: false } });
product.belongsToMany(user, { through: { model: cart, unique: false } });

user.belongsToMany(product, { through: favorite });
product.belongsToMany(user, { through: favorite });

product.hasMany(stock, { foreignKey: "productId" });

user.hasMany(order, { foreignKey: "userId" });
googleUser.hasMany(order, { foreignKey: "googleUserId" });
product.hasMany(order, { foreignKey: "productId" });

googleUser.hasMany(cart, { foreignKey: "googleUserId" });

module.exports = {
  ...sequelize.models,
  connection: sequelize
};
