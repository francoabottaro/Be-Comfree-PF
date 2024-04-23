//? Dependencies
const server = require("./src/server");
const saveInfo = require("./src/saveInfo");
const userAdmin = require("./src/utilities/userAdmin");
const { connection } = require("./src/db");
require("dotenv").config();

//? Utilities
const { SERVER_PORT } = process.env;

(startServer = async () => {
  try {
    await connection.sync({ force: true }); //! true borra
    await userAdmin();
    await saveInfo();
    server.listen(SERVER_PORT, () =>
      console.log(`Server raised in port: ${SERVER_PORT}`)
    );
  } catch (error) {
    console.log("Server not started", error);
  }
})();
