//? Dependencies
const deleteProduct = require("../../controllers/product/deleteProduct");

const deleteProductHandler = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).send("Bad Request! Please send an Id");
    }
    const deletedProduct = await deleteProduct(id);

    return res.json(deletedProduct);
  } catch (error) {
    console.log("Error deleting product", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = deleteProductHandler;
