//? Dependencies
const { cart } = require("../../db");

const putCart = async (id, newCartData) => {
  try {
    const cartData = await cart.findOne({ where: { id } });

    if (cartData) {
      cartData.colour = newCartData.colour || cartData.colour;
      cartData.size = newCartData.size || cartData.size;
      cartData.amount = newCartData.amount || cartData.amount;
      cartData.productId = newCartData.productId || cartData.productId;
      cartData.orderId = newCartData.orderId || cartData.orderId;

      await cartData.save();
      return { success: true, cart: cartData };
    }
  } catch (error) {
    console.log();
    throw error;
  }
};

module.exports = putCart;
