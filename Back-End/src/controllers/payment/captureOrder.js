//? Dependencies
const axios = require("axios");
require("dotenv").config();
const { CLIENT_API } = process.env;
const { order, stock } = require("../../db");
const { PAYPAL_API, PAYPAL_API_SECRET, PAYPAL_API_CLIENT } = process.env;
const { aux } = require("../../handlers/order/postOrderHandler"); //* [{ stockId && newAmount }]

const captureOrder = async (req, res) => {
  try {
    const { token } = req.query;
    const { orderId } = req.params;

    await axios.post(
      `${PAYPAL_API}/v2/checkout/orders/${token}/capture`,
      {},
      {
        auth: {
          username: PAYPAL_API_CLIENT,
          password: PAYPAL_API_SECRET,
        },
      }
    );

    aux.map(async (info) => {
      const stockFinal = await stock.findOne({ where: { id: info.stockId } });
      stockFinal.amount = info.newAmount;
      await stockFinal.save();
    });

    const orderData = await order.findOne({ where: { id: orderId } });
    orderData.state = "Paid";
    await orderData.save();

    // Redireccionar al usuario a la página principal

    return res.redirect(`${CLIENT_API}/?state=Paid`);
  } catch (error) {
    res.json(res.json({ error: error.message }));
  }
};
module.exports = captureOrder;
