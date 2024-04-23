//? Dependencies
const { Router } = require("express");
const productRoute = require("./productRoute");
const userRoute = require("./userRoute");
const orderRoute = require("./orderRoute");
const cartRoute = require("./cartRoute");
const stockRoute = require("./stockRoute");
const favoriteRoute = require("./favoriteRoute");
const utilitiesRoute = require("./utilitiesRoute");

//? Routes
const router = Router();
router.use("/product", productRoute);
router.use("/user", userRoute);
router.use("/order", orderRoute);
router.use("/cart", cartRoute);
router.use("/stock", stockRoute);
router.use("/favorite", favoriteRoute);
router.use("/", utilitiesRoute);

module.exports = router;
