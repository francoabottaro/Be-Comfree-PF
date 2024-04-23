//? Dependencies
const { Router } = require("express");
const orderRoute = Router();

//? Handlers
const { postOrderHandler } = require("../handlers/order/postOrderHandler");
const putOrderHandler = require("../handlers/order/putOrderHandler");
const deleteOrderHandler = require("../handlers/order/deleteOrderHandler");
const getOrderHandler = require("../handlers/order/getOrderHandler");
const getAllOrdersHandler = require("../handlers/order/getAllOrdersHandler");
const cancelOrder = require("../controllers/payment/cancelOrder");
const captureOrder = require("../controllers/payment/captureOrder");
const isAdmin = require("../middlewares/isAdminMiddleware");

//? Routes
orderRoute.post("/", postOrderHandler);
orderRoute.put("/:id", putOrderHandler);
orderRoute.delete("/:id", isAdmin, deleteOrderHandler); //! Only admins
orderRoute.get("/:userId", getOrderHandler);
orderRoute.get("/", getAllOrdersHandler);
orderRoute.get("/cancel-order/:orderId", cancelOrder);
orderRoute.get("/capture-order/:orderId", captureOrder);

module.exports = orderRoute;
