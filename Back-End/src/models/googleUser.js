const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  const googleUser = sequelize.define(
    "googleUser",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: true,
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
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [1, 30],
          is: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        },
      },
      profilePicture: {
        type: DataTypes.STRING,
        defaultValue: "https://i.ibb.co/xDvWKR2/Admin-Profile-Picture.webp",
      },
    },
    {
      timestamps: false,
    }
  );

  return googleUser;
};
