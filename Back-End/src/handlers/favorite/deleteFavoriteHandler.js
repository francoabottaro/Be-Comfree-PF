//? Dependencies
const deleteFavorite = require("../../controllers/favorite/deleteFavorite");

const deleteFavoriteHandler = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).send("Bad Request! Please send an Id");
    }
    const deletedFavorite = await deleteFavorite(id);

    return res.json(deletedFavorite);
  } catch (error) {
    console.log("Error deleting favorite", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = deleteFavoriteHandler;
