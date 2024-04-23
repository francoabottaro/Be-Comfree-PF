//? Dependencies
const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  const cart = sequelize.define(
    "cart",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: UUIDV4,
      },
      size: {
        type: DataTypes.ENUM("XS", "S", "M", "L", "XL"),
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      colour: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );

  return cart;
};
