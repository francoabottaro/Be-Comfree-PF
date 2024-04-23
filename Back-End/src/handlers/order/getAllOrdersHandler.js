//? Dependencies
const getAllOrders = require("../../controllers/order/getAllOrders");

const getAllOrdersHandler = async (req, res) => {
  try {
    const allOrders = await getAllOrders();

    res.status(200).json(allOrders);
  } catch (error) {
    console.log("Error getting orders", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getAllOrdersHandler;
