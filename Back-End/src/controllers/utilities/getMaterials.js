//? Utilities
const { product } = require("../../db");

const getMaterials = async () => {
  const allMaterials = [];
  try {
    const allProducts = await product.findAll();

    allProducts.forEach((product) => {
      if (Array.isArray(product.material)) {
        product.material.forEach((material) => {
          if (!allMaterials.includes(material)) {
            allMaterials.push(material);
          }
        });
      } else {
        if (!allMaterials.includes(product.material)) {
          allMaterials.push(product.material);
        }
      }
    });
    return allMaterials;
  } catch (error) {
    console.log(error);
    return [];
  }
};

module.exports = getMaterials;
