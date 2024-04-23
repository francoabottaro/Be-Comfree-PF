//? Dependencies
const { favorite } = require("../../db");

const getAllFavorites = async () => {
  try {
    const favorites = await favorite.findAll();

    return favorites;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = getAllFavorites;
