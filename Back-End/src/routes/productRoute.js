//? Dependencies
const { Router } = require("express");
const productRoute = Router();

//? Handlers
const getAllProductsHandler = require("../handlers/product/getAllProductsHandler");
const getProductHandler = require("../handlers/product/getProductHandler");
const postProductHandler = require("../handlers/product/postProductHandler");
const deleteProductHandler = require("../handlers/product/deleteProductHandler");
const putProductHandler = require("../handlers/product/putProductHandler");
const isAdmin = require("../middlewares/isAdminMiddleware");
//? Routes
productRoute.post("/", getAllProductsHandler); //* Falso get
productRoute.get("/:id", getProductHandler);
productRoute.post("/create", isAdmin, postProductHandler); //! Only admins
productRoute.delete("/:id", isAdmin, deleteProductHandler); //! Only admins
productRoute.put("/:id", isAdmin, putProductHandler); //! Only admins

module.exports = productRoute;
