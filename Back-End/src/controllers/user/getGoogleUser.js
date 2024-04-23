//? Dependencies
const { googleUser } = require("../../db");

const getGoogleUser = async (email) => {
  try {
    const foundGoogleUser = await googleUser.findOne({
      where: { email },
    });

    return foundGoogleUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = getGoogleUser;
