//? Dependencies
const { order } = require("../../db");

const putOrder = async (id, newOrderData) => {
  try {
    const orderData = await order.findOne({ where: { id } });

    if (orderData) {
      orderData.state = newOrderData.state || orderData.state;

      await orderData.save();
      return { success: true, order: orderData };
    }
  } catch (error) {
    console.log();
    throw error;
  }
};
module.exports = putOrder;
