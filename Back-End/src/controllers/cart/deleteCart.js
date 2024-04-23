//? Dependencies
const { cart } = require("../../db");

const deleteCart = async (id) => {
  try {
    const removedCart = await cart.findOne({ where: { id } });

    if (!removedCart) {
      throw new Error("Cart not found");
    }

    await removedCart.destroy();
    return { message: "Cart deleted successfully" };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = deleteCart;
