//? Dependencies
const { favorite } = require("../../db");

const postFavorite = async (productId, userId) => {
  try {
    const newFavorite = await favorite.create({
      productId,
      userId,
    });

    return newFavorite;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = postFavorite;
