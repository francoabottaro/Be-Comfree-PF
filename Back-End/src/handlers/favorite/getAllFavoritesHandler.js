//? Dependencies
const getAllFavorites = require("../../controllers/favorite/getAllFavorites");

const getAllFavoritesHandler = async (req, res) => {
  try {
    const allFavorites = await getAllFavorites();

    res.status(200).json(allFavorites);
  } catch (error) {
    console.log("Error getting favorites", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getAllFavoritesHandler;
