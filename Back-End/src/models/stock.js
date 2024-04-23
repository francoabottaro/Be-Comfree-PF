//? Dependencies
const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  const stock = sequelize.define(
    "stock",
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
    },
    {
      timestamps: false,
    }
  );

  return stock;
};
