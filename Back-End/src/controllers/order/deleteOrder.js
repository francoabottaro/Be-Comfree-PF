//? Dependencies
const { order } = require("../../db");

const deleteOrder = async (id) => {
  try {
    const removedOrder = await order.findOne({ where: { id } });

    if (!removedOrder) {
      throw new Error("Order not found");
    }

    await removedOrder.destroy();
    return { message: "Order deleted successfully" };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = deleteOrder;
