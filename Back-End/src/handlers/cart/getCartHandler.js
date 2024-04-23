//? Dependencies
const getCart = require("../../controllers/cart/getCart");

const getCartHandler = async (req, res) => {
  try {
    const { userId } = req.params;

    const cart = await getCart(userId);
    if (!cart) {
      return res
        .status(404)
        .send(`Not found! Cart with id: ${userId} is not in the database`);
    }
    return res.status(200).json(cart);
  } catch (error) {
    console.log("Error getting cart", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getCartHandler;
