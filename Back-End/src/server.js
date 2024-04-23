//? Dependencies
const express = require("express");
const server = express();
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes/routeIndex");
const helmet = require("helmet");

//? Middlewares
server.use(helmet()); //* HTTP receptor
server.use(express.json()); //* JSON reader
server.use(morgan("dev")); //* Request status (in console)
server.use(cors()); //* Cross-Origin Resource Sharing (multiples HTTP from differents web servers)
//* CORS configuration
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
server.use(router);

module.exports = server;
