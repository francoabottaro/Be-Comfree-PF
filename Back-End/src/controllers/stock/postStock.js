//? Dependencies
const { stock } = require("../../db");

const postStock = async (colour, size, amount, productId) => {
  try {
    const newStock = await stock.create({
      colour,
      size,
      amount,
      productId,
    });
    return newStock;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = postStock;
