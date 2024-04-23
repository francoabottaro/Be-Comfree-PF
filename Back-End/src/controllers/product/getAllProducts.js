//? Dependencies
const { product } = require("../../db");
const { Op } = require("sequelize");

const getAllProducts = async (
  name,
  gender,
  minPrice,
  maxPrice,
  material,
  colour,
  orderType,
  order,
  category
) => {
  try {
    const filters = {};
    if (name !== undefined) filters.name = { [Op.iLike]: `%${name}%` };
    if (category !== undefined) filters.category = category;
    if (gender !== undefined) filters.gender = { [Op.eq]: gender };
    if (minPrice !== undefined || maxPrice !== undefined) {
      filters.price = {
        [Op.between]: [
          minPrice !== undefined ? minPrice : 0,
          maxPrice !== undefined ? maxPrice : Number.MAX_SAFE_INTEGER,
        ],
      };
    }
    if (material && material.length > 0)
      filters.material = { [Op.contains]: material };
    if (colour && colour.length > 0) filters.colour = { [Op.contains]: colour };

    const filteredProducts = await product.findAll({
      where: filters,
      order: [[orderType ? orderType : "name", order ? order : "ASC"]],
    });
    return filteredProducts;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = getAllProducts;
