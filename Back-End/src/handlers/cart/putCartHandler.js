//? Dependencies
const putCart = require("../../controllers/cart/putCart");

const putCartHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const newCartData = req.body;

    const cart = await putCart(id, newCartData);
    res.status(200).json(cart);
  } catch (error) {
    console.log("Error updating cart", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = putCartHandler;
