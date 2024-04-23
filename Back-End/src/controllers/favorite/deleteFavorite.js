//? Dependencies
const { favorite } = require("../../db");

const deleteFavorite = async (id) => {
  try {
    const removedFavorite = await favorite.findOne({ where: { id } });

    if (!removedFavorite) {
      throw new Error("Favorite not found");
    }

    await removedFavorite.destroy();
    return { message: "Favorite deleted successfully" };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = deleteFavorite;
