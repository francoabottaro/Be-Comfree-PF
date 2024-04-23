//? Dependencies
const { Router } = require("express");
const favoriteRoute = Router();

//? Handlers
const postFavoriteHandler = require("../handlers/favorite/postFavoriteHandler");
const getAllFavoritesHandler = require("../handlers/favorite/getAllFavoritesHandler");
const deleteFavoriteHandler = require("../handlers/favorite/deleteFavoriteHandler");

//? Routes
favoriteRoute.post("/", postFavoriteHandler);
favoriteRoute.get("/", getAllFavoritesHandler);
favoriteRoute.delete("/:id", deleteFavoriteHandler);

module.exports = favoriteRoute;
