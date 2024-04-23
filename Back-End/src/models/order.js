//? Dependencies
const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = sequelize => {
  const order = sequelize.define(
    "order",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: UUIDV4
      },
      state: {
        type: DataTypes.ENUM("Processing", "Cancel", "Paid"),
        allowNull: true
      },
      finalPrice: {
        type: DataTypes.STRING,
        allowNull: true
      },
      size: {
        type: DataTypes.ENUM("XS", "S", "M", "L", "XL"),
        allowNull: false
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      colour: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      timestamps: false
    }
  );

  return order;
};
