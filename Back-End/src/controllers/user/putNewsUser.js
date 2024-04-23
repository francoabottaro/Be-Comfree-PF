//? Dependencies
const { user } = require("../../db");

const putUserNews = async (id) => {
  try {
    const userNews = await user.update(
      { newsLetter: false },
      {
        where: {
          id,
          newsLetter: true,
        },
      }
    );
    return userNews;
  } catch (error) {
    console.log("Error unsubscripting user", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = putUserNews;
