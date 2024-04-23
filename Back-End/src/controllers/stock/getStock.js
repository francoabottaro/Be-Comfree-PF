//? Dependencies
const { stock } = require("../../db");

const getStock = async productId => {
  try {
    const foundStock = await stock.findAll({
      where: { productId }
    });

    // foundStock.sort((a, b) => {
    //   const order = { XS: 1, S: 2, M: 3, L: 4, XL: 5 };
    //   return order[a.size] - order[b.size];
    // });

    return foundStock;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = getStock;
