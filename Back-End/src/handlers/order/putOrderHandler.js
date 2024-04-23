//? Dependencies
const putOrder = require("../../controllers/order/putOrder");

const putOrderHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { state } = req.body;

    const order = await putOrder(id, state);
    res.status(200).json(order);
  } catch (error) {
    console.log("Error updating order", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = putOrderHandler;
