//? Dependencies
const { googleUser } = require("../../db.js");

const postGoogleUser = async (name, email) => {
  try {
    const newUser = await googleUser.create({
      name,
      email,
    });
    return newUser;
  } catch (error) {
    throw error;
  }
};

module.exports = postGoogleUser;
