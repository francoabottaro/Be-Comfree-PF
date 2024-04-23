//? Dependencies
const deleteStock = require("../../controllers/stock/deleteStock");

const deleteStockHandler = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).send("Bad Request! Please send an Id");
    }
    const deletedStock = await deleteStock(id);

    return res.json(deletedStock);
  } catch (error) {
    console.log("Error deleting stock", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = deleteStockHandler;
