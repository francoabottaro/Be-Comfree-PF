//? Dependencies
const { order } = require("../../db");

const getAllOrders = async () => {
  try {
    const orders = await order.findAll();
    return orders;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = getAllOrders;
