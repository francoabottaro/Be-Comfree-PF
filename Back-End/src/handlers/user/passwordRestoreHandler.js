//? Dependencies
const crypto = require("crypto");
const passwordRestore = require("../../controllers/user/passwordRestore");

const passwordRestoreHandler = async (req, res) => {
  const { email } = req.body;

  const token = crypto.randomBytes(20).toString("hex");

  const verify = await passwordRestore(email, token);
  if (verify)
    return res.send("Correo de restablecimiento de contraseña enviado.");
};

module.exports = passwordRestoreHandler;
