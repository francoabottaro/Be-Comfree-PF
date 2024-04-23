//? Dependencies
const postOrder = require("../../controllers/order/postOrder");
const createOrder = require("../../controllers/payment/createOrder");
const { cart, stock } = require("../../db");

const aux = [];
const postOrderHandler = async (req, res) => {
  try {
    const { userId, finalPrice, googleUserId } = req.body;
    let hasError = false;
    let i = 0;
    let foundCarts;

    if (userId) {
      foundCarts = await cart.findAll({ where: { userId } });
    } else {
      foundCarts = await cart.findAll({ where: { googleUserId } });
    }

    while (i < foundCarts.length && !hasError) {
      const cartAmount = foundCarts[i].dataValues.amount;
      const foundStock = await stock.findOne({
        where: {
          colour: foundCarts[i].dataValues.colour,
          size: foundCarts[i].dataValues.size,
          productId: foundCarts[i].dataValues.productId,
        },
      });
      const stockAmount = foundStock.dataValues.amount;
      if (stockAmount < cartAmount) {
        hasError = true;
        continue;
      }
      const stockResult = stockAmount - cartAmount;
      aux.push({ stockId: foundStock.dataValues.id, newAmount: stockResult });
      i++;
    }

    if (hasError) {
      return res.status(400).send("Bad Request! No available stock");
    }

    const newOrder = await postOrder(userId, finalPrice, googleUserId);

    if (newOrder) {
      const orderId = newOrder.id;
      const payment = await createOrder(finalPrice, orderId);

      return res.status(200).json({ href: payment });
    }

    return res.status(400).send("Bad Request! Missing info");
  } catch (error) {
    console.log("Error creating order", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { postOrderHandler, aux };
