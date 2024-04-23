//? Dependencies
const { stock } = require("../../db");

const getAllStocks = async () => {
  try {
    const stocks = await stock.findAll();
    return stocks;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = getAllStocks;
