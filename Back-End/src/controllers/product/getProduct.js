//? Dependencies
const { product } = require("../../db");

const getProduct = async (id) => {
  try {
    const productDetail = await product.findOne({
      where: { id },
    });

    return productDetail;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = getProduct;
