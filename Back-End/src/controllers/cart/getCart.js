//? Dependencies
const { cart } = require("../../db");

const getCart = async (userId) => {
  try {
    const foundCart = await cart.findAll({ where: { userId } });
    return foundCart;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = getCart;
