//? Dependencies
const { order } = require("../../db");
require("dotenv").config();
const { CLIENT_API } = process.env;

const cancelOrder = async (req, res) => {
  try {
    const { orderId } = req.params;

    const orderData = await order.findOne({
      where: { id: orderId },
    });
    orderData.state = "Cancel";
    await orderData.save();

    return res.redirect(`${CLIENT_API}/?state=Cancel`)
  } catch (error) {
    return res.json({ error: error.message });
  }
};
module.exports = cancelOrder;
