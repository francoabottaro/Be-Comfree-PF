//? Dependencies
const postStock = require("../../controllers/stock/postStock");

const postStockHandler = async (req, res) => {
  const { colour, size, amount, productId } = req.body;
  console.log("0)", colour, size, amount, productId);
  try {
    if (colour && size && amount && productId) {
      console.log("1)", colour, size, amount, productId);
      const newStock = await postStock(colour, size, amount, productId);
      console.log("3)", colour, size, amount, productId);
      if (newStock) {
        return res.status(200).send("Stock created");
      }
    }
    return res.status(400).send("Bad Request! Missing info");
  } catch (error) {
    console.log("Error creating stock", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = postStockHandler;
