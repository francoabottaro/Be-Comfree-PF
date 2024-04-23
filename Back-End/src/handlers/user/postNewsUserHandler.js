//? Dependencies
const { user } = require("../../db.js");
const nodemailer = require("nodemailer");
const postNewsUser = require("../../controllers/user/postNewsUser.js");
const { plantilla_stripor_newsletter } = require("./plantilla_stripor.js");

const postNewsUserHandler = async (req, res) => {
  try {
    const { email } = req.body;

    const newsUserFound = await user.findOne({
      where: { email, newsLetter: true },
    });

    if (newsUserFound) {
      return res.send("You are already subscribed to our Newsletter");
    } else {
      const newUser = await postNewsUser(email);
      if (newUser) {
        const plantilla_NewsLetter = plantilla_stripor_newsletter(newUser.id);
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
          subject: "Be comfree Newsletter",
          html: plantilla_NewsLetter,
        });
        return res
          .status(200)
          .send("You are successfully subscribed to our Newsletter");
      }
    }
  } catch (error) {
    console.log("Error creating user", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = postNewsUserHandler;
