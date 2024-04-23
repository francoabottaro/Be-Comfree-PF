//? Dependencies
const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  const product = sequelize.define(
    "product",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 30],
        },
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          min: 0,
        },
      },
      gender: {
        type: DataTypes.ENUM("Men", "Women"),
        allowNull: false,
      },
      images: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      colour: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      material: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        validate: {
          notEmpty: true,
        },
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 30],
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1, 300],
        },
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  return product;
};
