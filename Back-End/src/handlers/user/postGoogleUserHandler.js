//? Dependencies
const postGoogleUser = require("../../controllers/user/postGoogleUser");
const { user, googleUser } = require("../../db.js");

const postGoogleUserHandler = async (req, res) => {
  try {
    const { name, email } = req.body;
    const userFound = await user.findOne({ where: { email } });
    const googleUserFound = await googleUser.findOne({ where: { email } });
    const newsUserFound = await user.findOne({
      where: { email, newsLetter: true },
    });

    if (userFound) {
      return res.status(200).send({
        id: userFound.id,
        message: `Welcome ${userFound.name ? userFound.name : userFound.email}`,
      });
    }
    if (googleUserFound) {
      return res.status(200).send({
        id: googleUserFound.id,
        message: `Welcome ${googleUserFound.name}`,
      });
    }
    if (newsUserFound) {
      return res.status(200).send({
        id: newsUserFound.id,
        message: `Welcome ${newsUserFound.email}`,
      });
    }

    const newUser = await postGoogleUser(name, email);
    if (newUser) {
      return res
        .status(200)
        .send({ id: newUser.id, message: "Google user created successfully" });
    }

    return res.status(400).send("Bad request! Google user not created");
  } catch (error) {
    console.log("Error getting user", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = postGoogleUserHandler;
