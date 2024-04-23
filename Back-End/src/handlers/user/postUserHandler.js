//? Dependencies
const postUser = require("../../controllers/user/postUser");
const { user, googleUser } = require("../../db");
const nodemailer = require("nodemailer");

const postUserHandler = async (req, res) => {
  try {
    const {
      name,
      email,
      lastname,
      birthdate,
      password,
      phone,
      address,
      city,
      state,
      country,
      zipcode,
    } = req.body;

    const userFound = await user.findOne({ where: { email } });
    const googleUserFound = await googleUser.findOne({ where: { email } });
    const newsUserFound = await user.findOne({
      where: { email, newsLetter: true },
    });

    if (userFound) {
      if (newsUserFound) {
        await user.destroy({ where: { email, newsLetter: true } });
        await googleUser.destroy({ where: { email } });

        const newUser = await postUser(
          name,
          email,
          lastname,
          birthdate,
          password,
          phone,
          address,
          city,
          state,
          country,
          zipcode,
          (newsLetter = true)
        );
        if (newUser) {
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
            subject: `Welcome ${name}`,
            text: "Welcome to BeComfree, enjoy!",
          });
          return res.status(200).send("User created successfully");
        }
      }
      return res.send("User already exist");
    }

    if (
      name &&
      email &&
      lastname &&
      birthdate &&
      password &&
      phone &&
      address &&
      city &&
      state &&
      country &&
      zipcode
    ) {
      if (googleUserFound) {
        await googleUser.destroy({ where: { email } });
      }
      const newUser = await postUser(
        name,
        email,
        lastname,
        birthdate,
        password,
        phone,
        address,
        city,
        state,
        country,
        zipcode,
        (newsLetter = false)
      );
      if (newUser) {
        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            user: "becomfreee@gmail.com",
            pass: "aczt jwha iyfg wotr",
          },
        });

        transporter.sendMail({
          from: "<becomfreee@gmail.com>",
          to: email,
          subject: `Welcome ${name}`,
          text: "Welcome to BeComfree, enjoy!",
        });
        return res.status(200).send("User created successfully");
      }
      return res.status(400).send("Bad request! User not created");
    }
    return res.status(400).send("Bad request! Missing data");
  } catch (error) {
    console.log("Error creating user", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = postUserHandler;
