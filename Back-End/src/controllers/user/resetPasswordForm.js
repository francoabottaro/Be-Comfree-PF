//? Dependencies
const { user } = require("../../db");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const { plantilla_password_successfull } = require("./plantillas_stripo");

const resetPasswordForm = async (token, password) => {
  try {
    const userChange = await user.findOne({
      where: {
        resetToken: token,
      },
    });

    if (!userChange) return "Token not valid";

    const currentTime = new Date();
    const tokenExpirationTime = userChange.resetTokenExpiration;
    if (currentTime > tokenExpirationTime) return "Token expired";

    const salts = 10;
    hashedPassword = await bcrypt.hash(password, salts);

    if (userChange) {
      userChange.password = hashedPassword;
      await userChange.save();
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "becomfreee@gmail.com",
        pass: "aczt jwha iyfg wotr",
      },
    });
    await transporter.sendMail({
      from: "<becomfreee@gmail.com>",
      to: userChange.email,
      subject: "Password Restored!",
      html: plantilla_password_successfull,
    });

    return userChange;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = resetPasswordForm;
