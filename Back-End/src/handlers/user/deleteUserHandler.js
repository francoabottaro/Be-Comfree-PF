//? Dependencies
const deleteUser = require("../../controllers/user/deleteUser");

const deleteUserHandler = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).send("Bad Request! Please send an Id");
    }

    const deletedUser = await deleteUser(id);
    return res.json(deletedUser);
  } catch (error) {
    console.log("Error deleting user", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = deleteUserHandler;
