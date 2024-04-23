//? Dependencies
const { order } = require("../../db");

const getOrder = async (userId) => {
  try {
    const foundOrder = await order.findAll({ where: { userId: userId } });

    return foundOrder;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = getOrder;
