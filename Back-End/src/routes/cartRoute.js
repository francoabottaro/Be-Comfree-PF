//? Dependencies
const { Router } = require("express");
const cartRoute = Router();

//? Handlers
const postCartHandler = require("../handlers/cart/postCartHandler");
const putCartHandler = require("../handlers/cart/putCartHandler");
const deleteCartHandler = require("../handlers/cart/deleteCartHandler");
const getCartHandler = require("../handlers/cart/getCartHandler");

//? Routes
cartRoute.post("/", postCartHandler);
cartRoute.put("/:id", putCartHandler);
cartRoute.delete("/:id", deleteCartHandler);
cartRoute.get("/:userId", getCartHandler);

module.exports = cartRoute;
