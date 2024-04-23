//? Dependencies
const getStock = require("../../controllers/stock/getStock");

const getStockHandler = async (req, res) => {
  try {
    const { productId } = req.params;

    const stock = await getStock(productId);
    if (!stock) {
      return res
        .status(404)
        .send(
          `Not found! Stock of product with id: ${id} is not in the database`
        );
    }
    return res.status(200).json(stock);
  } catch (error) {
    console.log("Error getting stock", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getStockHandler;
