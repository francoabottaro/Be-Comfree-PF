//? Dependencies
const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  const user = sequelize.define("user", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 30],
      },
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 30],
      },
    },
    birthdate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        len: [1, 30],
        is: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [8, Infinity],
      },
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [6, 15],
      },
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 30],
      },
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 30],
      },
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 30],
      },
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 30],
      },
    },
    zipcode: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: true,
        min: 0,
        max: 9999999999,
      },
    },
    provider: {
      type: DataTypes.ENUM("google", "local"),
      allowNull: true,
      defaultValue: "local",
    },
    newsLetter: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    profilePicture: {
      type: DataTypes.STRING,
      defaultValue: "https://i.ibb.co/xDvWKR2/Admin-Profile-Picture.webp",
    },
    resetToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    resetTokenExpiration: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });

  return user;
};
