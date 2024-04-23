//? Dependencies
const login = require("../../controllers/utilities/login");

const loginHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email && !password) {
      return res
        .status(401)
        .send("Missing info! You must to provide an email and a password");
    }

    if (!email) {
      return res.status(401).send("Missing info! You must to provide an email");
    }

    if (!password) {
      return res
        .status(401)
        .send("Missing info! You must to provide a password");
    }

    const token = await login(email, password);

    if (token.error) {
      console.log("4), token error", token.error);
      return res.status(403).send(token.error);
    }

    res.status(200).json({ token });
  } catch (error) {
    console.log("Login error", error);
    console.log("Login error", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = loginHandler;
