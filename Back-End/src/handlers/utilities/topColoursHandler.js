//? Dependencies
const { cart } = require("../../db");
const { Op } = require("sequelize");

const topColoursHandler = async (req, res) => {
  try {
    const topColours = await cart.findAll({
      attributes: [
        "colour",
        [cart.sequelize.fn("COUNT", cart.sequelize.col("id")), "count"],
      ],
      where: {
        colour: { [Op.ne]: null },
      },
      group: ["colour"],
      order: [[cart.sequelize.literal("count"), "DESC"]],
      limit: 10,
    });

    return res.json(topColours);
  } catch (error) {
    console.error("Error al recuperar los colores más elegidos:", error);
    throw error;
  }
};
module.exports = topColoursHandler;
