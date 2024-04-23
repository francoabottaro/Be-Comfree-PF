//? Dependencies
const getProduct = require("../../controllers/product/getProduct");

const getProductHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await getProduct(id);
    if (!product) {
      return res
        .status(404)
        .send(`Product with id: ${id} is not in the database`);
    }

    return res.status(200).json(product);
  } catch (error) {
    console.log("Error getting product", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getProductHandler;
