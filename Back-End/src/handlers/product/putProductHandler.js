//? Dependencies
const putProduct = require("../../controllers/product/putProduct");

const putProductHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const newProductData = req.body;

    const product = await putProduct(id, newProductData);
    res.status(200).json(product);
  } catch (error) {
    console.log("Error updating product", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = putProductHandler;
