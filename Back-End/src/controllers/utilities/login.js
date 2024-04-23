//? Dependencies
const { user } = require("../../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = async (email, password) => {
  try {
    const { TOKEN_KEY } = process.env;
    const userData = await user.findOne({ where: { email } });

    if (!userData) {
      return { error: "Incorrect email" };
    }

    const match = await bcrypt.compare(password, userData.password);
    if (!match) {
      return { error: "Incorrect password" };
    }

    if (!userData.isActive) {
      return { error: "You are banned" };
    }

    const tokenPayload = {
      userId: userData.id,
      userName: userData.name,
      userLastname: userData.lastname,
      userBirthdate: userData.birthdate,
      userEmail: userData.email,
      userPassword: userData.password,
      isAdmin: userData.isAdmin,
      isActive: userData.isActive,
      userMobile: userData.phone,
    };
    const token = jwt.sign(tokenPayload, TOKEN_KEY, { expiresIn: "1h" });

    return token;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = login;
