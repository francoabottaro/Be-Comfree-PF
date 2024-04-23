//? Dependencies
const { order } = require("../../db");

const postOrder = async (userId, finalPrice, googleUserId) => {
  try {
    const newOrder = await order.create({
      userId: userId ? userId : null,
      finalPrice,
      googleUserId: googleUserId ? googleUserId : null,
    });

    return newOrder;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = postOrder;
