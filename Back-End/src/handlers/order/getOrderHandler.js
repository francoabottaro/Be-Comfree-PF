//? Dependencies
const getOrder = require("../../controllers/order/getOrder");

const getOrderHandler = async (req, res) => {
  try {
    const { userId } = req.params;

    const order = await getOrder(userId);

    if (!order) {
      return res
        .status(404)
        .send(`Not found! Order with id: ${id} is not in the database`);
    }
    return res.status(200).json(order);
  } catch (error) {
    console.log("Error getting order", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getOrderHandler;
