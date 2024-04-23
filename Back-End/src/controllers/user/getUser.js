//? Dependencies
const { user } = require("../../db");

const getUser = async (id) => {
  try {
    const foundUser = await user.findOne({ where: { id } });
    return foundUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = getUser;
