//? Dependencies
const { order, connection } = require("../../db");

const topUsersHandler = async (req, res) => {
  try {
    const topUsers = await order.findAll({
      attributes: [
        "userId",
        [connection.fn("COUNT", connection.col("id")), "orderCount"],
      ],

      group: ["userId"],
      order: [["orderCount", "DESC"]],
      limit: 10,
    });

    return res.json(topUsers);
  } catch (error) {
    console.error("Error al obtener los usuarios principales:", error);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = topUsersHandler;
