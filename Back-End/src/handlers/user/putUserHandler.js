//? Dependencies
const putUser = require("../../controllers/user/putUser");

const putUserHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const newUserData = req.body;

    const user = await putUser(id, newUserData);
    return res.status(200).json(user);
  } catch (error) {
    console.log("Error updating user", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = putUserHandler;
