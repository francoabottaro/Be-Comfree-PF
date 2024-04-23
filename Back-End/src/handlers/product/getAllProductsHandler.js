//? Dependencies
const getAllProducts = require("../../controllers/product/getAllProducts");

const getAllProductsHandler = async (req, res) => {
  try {
    const {
      name,
      gender,
      minPrice,
      maxPrice,
      material,
      colour,
      orderType,
      order,
      category,
    } = req.body;

    const allProducts = await getAllProducts(
      name,
      gender,
      minPrice,
      maxPrice,
      material,
      colour,
      orderType,
      order,
      category
    );
    return res.status(200).json(allProducts);
  } catch (error) {
    console.log("Error filtering products", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getAllProductsHandler;
