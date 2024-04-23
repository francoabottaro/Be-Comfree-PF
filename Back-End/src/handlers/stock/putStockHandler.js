//? Dependencies
const putStock = require("../../controllers/stock/putStock");

const putStockHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const newStockData = req.body;

    const stock = await putStock(id, newStockData);
    res.status(200).json(stock);
  } catch (error) {
    console.log("Error updating stock", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = putStockHandler;
