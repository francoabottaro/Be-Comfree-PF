//? Dependencies
const getGoogleUser = require("../../controllers/user/getGoogleUser");

const getGoogleUserHandler = async (req, res) => {
  try {
    const { email } = req.params;

    console.log("Email:..", email);

    const googleUser = await getGoogleUser(email);
    if (!googleUser) {
      return res
        .status(404)
        .send(
          `Not found! Google user with email: ${email} is not in the database`
        );
    }
    return res.status(200).json(googleUser);
  } catch (error) {
    console.log("Error getting Google user", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getGoogleUserHandler;
