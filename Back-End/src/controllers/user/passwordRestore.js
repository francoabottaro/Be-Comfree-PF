//? Dependencies
const nodemailer = require("nodemailer");
const { user } = require("../../db");
const { resetPasword_token } = require("./plantillas_stripo");

const passwordRestore = async (email, token) => {
  try {
    const usuario = await user.findOne({ where: { email } });

    if (usuario) {
      usuario.resetToken = token;
      usuario.resetTokenExpiration = new Date(Date.now() + 3600000);
      await usuario.save();
    }

    const plantilla_reset_password = resetPasword_token(token);
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "becomfreee@gmail.com",
        pass: "aczt jwha iyfg wotr",
      },
    });

    transporter.sendMail({
      from: "<becomfreee@gmail.com>",
      to: email,
      subject: "Restore password",
      html: plantilla_reset_password,
    });
  } catch (error) {
    console.error("Error sending the email:", error);
    throw error;
  }
};

module.exports = passwordRestore;
