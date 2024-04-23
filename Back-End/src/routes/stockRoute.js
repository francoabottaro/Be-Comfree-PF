//? Dependencies
const { Router } = require("express");
const stockRoute = Router();

//? Handlers
const postStockHandler = require("../handlers/stock/postStockHandler");
const putStockHandler = require("../handlers/stock/putStockHandler");
const getStockHandler = require("../handlers/stock/getStockHandler");
const getAllStocksHandler = require("../handlers/stock/getAllStocksHandler");
const deleteStockHandler = require("../handlers/stock/deleteStockHandler");
const isAdmin = require("../middlewares/isAdminMiddleware");

//? Routes
stockRoute.post("/", isAdmin, postStockHandler); //! Only admins
stockRoute.put("/:id", isAdmin, putStockHandler); //! Only admins
stockRoute.delete("/:id", isAdmin, deleteStockHandler); //! Only admins
stockRoute.get("/:productId", getStockHandler);
stockRoute.get("/", getAllStocksHandler);

module.exports = stockRoute;
