//* Middleware to check if the user has a valid token

const jwt = require("jsonwebtoken");
require("dotenv").config();
const { TOKEN_KEY } = process.env;

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Obtener token del encabezado de autorización
  if (!token)
    return res.status(401).json({ message: "Unauthorized! You need a token" });

  jwt.verify(token, TOKEN_KEY, (error, decoded) => {
    if (error)
      return res.status(403).json({ message: "Forbidden! Invalid token" });
    req.user = decoded; // Adjuntar la información del usuario decodificada al objeto de solicitud
    next();
  });
};

module.exports = verifyToken;
