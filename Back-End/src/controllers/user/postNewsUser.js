//? Dependencies
const { user } = require("../../db");

const postUserNewsLetter = async (email) => {
  try {
    const userFound = await user.findOne({ where: { email } });

    if (userFound) {
      await user.update(
        { newsLetter: true },
        {
          where: {
            email,
            newsLetter: false,
          },
        }
      );
      return userFound;
    }

    const newUser = await user.create({
      email,
      newsLetter: true,
    });

    return newUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = postUserNewsLetter;
