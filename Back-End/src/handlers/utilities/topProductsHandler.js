const { cart, connection } = require("../../db");

const topProductHandler = async (req, res) => {
  try {
    const topProduct = await cart.findAll({
      attributes: [
        "productId",
        [connection.fn("COUNT", connection.col("id")), "cartCount"],
      ],
      group: ["productId"],
      order: [["cartCount", "DESC"]],
      limit: 10,
    });

    return res.json(topProduct);
  } catch (error) {
    console.error("Error al obtener los productos principales:", error);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = topProductHandler;
