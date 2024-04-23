//? Dependencies
const getAllStocks = require("../../controllers/stock/getAllStocks");

const getAllStocksHandler = async (req, res) => {
  try {
    const allStocks = await getAllStocks();
    res.status(200).json(allStocks);
  } catch (error) {
    console.log("Error getting stocks", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getAllStocksHandler;
