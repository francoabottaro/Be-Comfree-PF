//? Dependencies
const jwt = require("jsonwebtoken");
require("dotenv").config();

//? Utilities
const { TOKEN_KEY } = process.env;

const isAdmin = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; // Obtener token del encabezado de autorización
    if (!token)
      return res.status(401).json({ error: "You need to provide a token" });

    jwt.verify(token, TOKEN_KEY, (err, decoded) => {
      if (err) return res.status(403).json({ error: "Invalid token" });

      req.user = decoded;
      if (req.user.isAdmin) {
        next(); // Si el usuario es un administrador, continúa con el siguiente middleware o controlador
      } else {
        return res.status(403).json({ message: "You must be an Admin" });
      }
    });
  } catch (error) {
    console.error("Error in the middleware isAdmin:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = isAdmin;
