//? Dependencies
const getUser = require("../../controllers/user/getUser");

const getUserHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await getUser(id);
    if (!user) {
      return res
        .status(404)
        .send(`Not found! User with id: ${id} is not in the database`);
    }
    return res.status(200).json(user);
  } catch (error) {
    console.log("Error getting user", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getUserHandler;
