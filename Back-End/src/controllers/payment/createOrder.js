//? Dependencies
const { order } = require("../../db");
const axios = require("axios");
const { API_URL, PAYPAL_API, PAYPAL_API_SECRET, PAYPAL_API_CLIENT } =
  process.env;

const createOrder = async (finalPrice, orderId) => {
  try {
    const orderPay = {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: finalPrice,
          },
        },
      ],
      application_context: {
        brand_name: "Mi Tienda",
        landing_page: "NO_PREFERENCE", //!
        user_action: "PAY_NOW",
        return_url: `${API_URL}/order/capture-order/${orderId}`,
        cancel_url: `${API_URL}/order/cancel-order/${orderId}`,
      },
    };

    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");
    const {
      data: { access_token },
    } = await axios.post(`${PAYPAL_API}/v1/oauth2/token`, params, {
      auth: {
        username: PAYPAL_API_CLIENT,
        password: PAYPAL_API_SECRET,
      },
    });

    const { data } = await axios.post(
      `${PAYPAL_API}/v2/checkout/orders`,
      orderPay,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    const href = await data.links[1].href;

    const orderData = await order.findOne({
      where: { id: orderId },
    });
    orderData.state = "Processing";
    await orderData.save();

    return href;
  } catch (error) {
    return { error: error.message };
  }
};
module.exports = createOrder;
