//? Dependencies
const { product } = require("../../db");

const getCategories = async () => {
  try {
    const allCategories = [];
    const allProducts = await product.findAll();

    allProducts.map(({ category }) => {
      if (!allCategories.includes(category)) {
        allCategories.push(category);
      }
    });

    return allCategories;
  } catch (error) {
    console.log(error);
    return [];
  }
};

module.exports = getCategories;
