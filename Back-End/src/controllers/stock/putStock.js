//? Dependencies
const { stock } = require("../../db");

const putStock = async (id, newStockData) => {
  try {
    const stockData = await stock.findOne({ where: { id } });

    if (stockData) {
      stockData.colour = newStockData.colour || stockData.colour;
      stockData.size = newStockData.size || stockData.size;
      stockData.amount = newStockData.amount || stockData.amount;
      stockData.productId = newStockData.productId || stockData.productId;

      await stockData.save();
      return { success: true, stock: stockData };
    }
  } catch (error) {
    console.log();
    throw error;
  }
};

module.exports = putStock;
