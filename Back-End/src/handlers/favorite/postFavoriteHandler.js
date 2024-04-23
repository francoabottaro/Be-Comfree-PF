//? Dependencies
const postFavorite = require("../../controllers/favorite/postFavorite");

const postFavoriteHandler = async (req, res) => {
  const { productId, userId } = req.body;

  try {
    if (productId && userId) {
      const newFavorite = await postFavorite(productId, userId);
      if (newFavorite) {
        return res.status(200).send("Favorite created");
      }
    }
    return res.status(400).send("Bad Request! Missing info");
  } catch (error) {
    console.log("Error creating favorite", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = postFavoriteHandler;
