//? Dependencies
const postCart = require("../../controllers/cart/postCart");

const postCartHandler = async (req, res) => {
  const { colour, size, amount, productId, userId, googleUserId } = req.body;

  try {
    if (colour && size && amount && productId) {
      const newCart = await postCart(
        colour,
        size,
        amount,
        productId,
        userId,
        googleUserId
      );
      if (newCart) {
        return res.status(200).send("Cart created");
      }
    }
    return res.status(400).send("Bad Request! Missing info");
  } catch (error) {
    console.log("Error creating cart", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = postCartHandler;
