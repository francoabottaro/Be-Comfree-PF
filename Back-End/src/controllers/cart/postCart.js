//? Dependencies
const { cart } = require("../../db");

const postCart = async (
  colour,
  size,
  amount,
  productId,
  userId,
  googleUserId
) => {
  try {
    const newCart = await cart.create({
      colour,
      size,
      amount,
      productId,
      userId: userId ? userId : null,
      googleUserId: googleUserId ? googleUserId : null,
    });
    return newCart;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = postCart;
