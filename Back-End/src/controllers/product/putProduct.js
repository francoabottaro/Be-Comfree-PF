//? Dependencies
const { product } = require("../../db");

const putProduct = async (id, newProductData) => {
  try {
    const productData = await product.findOne({ where: { id } });

    if (productData) {
      productData.name = newProductData.hasOwnProperty("name")
        ? newProductData.name
        : productData.name;
      productData.price = newProductData.hasOwnProperty("price")
        ? newProductData.price
        : productData.price;
      productData.gender = newProductData.hasOwnProperty("gender")
        ? newProductData.gender
        : productData.gender;
      productData.images = newProductData.hasOwnProperty("images")
        ? newProductData.images
        : productData.images;
      productData.colour = newProductData.hasOwnProperty("colour")
        ? newProductData.colour
        : productData.colour;
      productData.material = newProductData.hasOwnProperty("material")
        ? newProductData.material
        : productData.material;
      productData.category = newProductData.hasOwnProperty("category")
        ? newProductData.category
        : productData.category;
      productData.isActive = newProductData.hasOwnProperty("isActive")
        ? newProductData.isActive
        : productData.isActive;
      productData.description = newProductData.hasOwnProperty("description")
        ? newProductData.description
        : productData.description;

      await productData.save();
      return { success: true, product: productData };
    }
  } catch (error) {
    console.log();
    throw error;
  }
};

module.exports = putProduct;
