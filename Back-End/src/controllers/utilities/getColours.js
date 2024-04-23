//? Dependencies
const { product } = require("../../db");

const getColours = async () => {
  const allColours = [];
  try {
    const allProducts = await product.findAll();

    allProducts.forEach((product) => {
      if (Array.isArray(product.colour)) {
        product.colour.forEach((colour) => {
          if (!allColours.includes(colour)) {
            allColours.push(colour);
          }
        });
      } else {
        if (!allColours.includes(product.colour)) {
          allColours.push(product.colour);
        }
      }
    });
    return allColours;
  } catch (error) {
    console.log(error);
    return [];
  }
};

module.exports = getColours;
