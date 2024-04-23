//? Dependencies
const { stock } = require("../../db");

const deleteStock = async (id) => {
  try {
    const removedStock = await stock.findOne({ where: { id } });

    if (!removedStock) {
      throw new Error("Stock not found");
    }

    await removedStock.destroy();
    return { message: "Stock deleted successfully" };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = deleteStock;
