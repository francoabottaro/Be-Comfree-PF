//? Dependencies
const { Router } = require("express");
const userRoute = Router();

//? Handlers
const postUserHandler = require("../handlers/user/postUserHandler");
const putUserHandler = require("../handlers/user/putUserHandler");
const deleteUserHandler = require("../handlers/user/deleteUserHandler");
const getAllUsersHandler = require("../handlers/user/getAllUsersHandler");
const getUserHandler = require("../handlers/user/getUserHandler");
const postGoogleUserHandler = require("../handlers/user/postGoogleUserHandler");
const postNewsUserHandler = require("../handlers/user/postNewsUserHandler");
const putNewsUserHandler = require("../handlers/user/putNewsUserHandler");
const passwordRestoreHandler = require("../handlers/user/passwordRestoreHandler");
const resetPasswordFormHandler = require("../handlers/user/resetPasswordFormHandler");
const getGoogleUserHandler = require("../handlers/user/getGoogleUserHandler");
const isAdmin = require("../middlewares/isAdminMiddleware");

//? Routes
userRoute.post("/", postUserHandler);
userRoute.put("/:id", putUserHandler);
userRoute.delete("/:id", deleteUserHandler);
userRoute.get("/", isAdmin, getAllUsersHandler); //! Only admins
userRoute.get("/:id", getUserHandler);
userRoute.post("/newsletter", postNewsUserHandler);
userRoute.get("/newsletter/unsubscribe", putNewsUserHandler); //* Falso Put
userRoute.post("/google", postGoogleUserHandler);
userRoute.get("/google/:email", getGoogleUserHandler);
userRoute.post("/forgot-password", passwordRestoreHandler);
userRoute.post("/reset-password/:token", resetPasswordFormHandler);

module.exports = userRoute;
