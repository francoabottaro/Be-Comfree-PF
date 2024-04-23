//? Dependencies
const { Router } = require("express");
const utilitiesRoute = Router();

//? Handlers
const getColoursHandler = require("../handlers/utilities/getColoursHandler");
const getMaterialsHandler = require("../handlers/utilities/getMaterialsHandler");
const getCategoriesHandler = require("../handlers/utilities/getCategoriesHandler");
const loginHandler = require("../handlers/utilities/loginHandler");
const privacyPolicy = require("../handlers/utilities/privacyPolicy");
const termsAndConditions = require("../handlers/utilities/termsAndConditions");
const topUsersHandler = require("../handlers/utilities/topUserHandler");
const topProductsHandler = require("../handlers/utilities/topProductsHandler");
const topColoursHandler = require("../handlers/utilities/topColoursHandler");
const isAdmin = require("../middlewares/isAdminMiddleware");

//? Routes
utilitiesRoute.get("/colours", getColoursHandler); //! Only Admins
utilitiesRoute.get("/materials", getMaterialsHandler); //! Only Admins
utilitiesRoute.get("/categories", getCategoriesHandler); //! Only Admins
utilitiesRoute.get("/privacy-policy", isAdmin, privacyPolicy); //! Only Admins
utilitiesRoute.get("/terms-and-conditions", isAdmin, termsAndConditions); //! Only Admins
utilitiesRoute.post("/login", loginHandler);
utilitiesRoute.get("/top-users", topUsersHandler);
utilitiesRoute.get("/top-products", topProductsHandler);
utilitiesRoute.get("/top-colours", topColoursHandler);

module.exports = utilitiesRoute;
