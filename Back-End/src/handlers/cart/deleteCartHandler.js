//? Dependencies
const deleteCart = require("../../controllers/cart/deleteCart");

const deleteCartHandler = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).send("Bad Request! Please send an Id");
    }
    const deletedCart = await deleteCart(id);
    return res.json(deletedCart);
  } catch (error) {
    console.log("Error deleting cart", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = deleteCartHandler;
