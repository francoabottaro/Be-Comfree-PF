//? Dependencies
const { product, stock } = require("../../db");

const deleteProduct = async (id) => {
  try {
    const removedProduct = await product.findOne({ where: { id } });
    const removedStocks = await stock.findOne({ where: { productId: id } });

    if (!removedProduct) {
      throw new Error("Product not found");
    }

    await removedProduct.destroy();
    await removedStocks.destroy();

    return { message: "Product and its stock deleted successfully" };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = deleteProduct;
