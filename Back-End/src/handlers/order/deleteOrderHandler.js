//? Dependencies
const deleteOrder = require("../../controllers/order/deleteOrder");

const deleteOrderHandler = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).send("Bad Request! Please send an Id");
    }
    const deletedOrder = await deleteOrder(id);
    return res.json(deletedOrder);
  } catch (error) {
    console.log("Error deleting order", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = deleteOrderHandler;
