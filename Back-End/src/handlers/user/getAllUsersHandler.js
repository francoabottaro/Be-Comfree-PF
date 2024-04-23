//? Dependencies
const getAllUsers = require("../../controllers/user/getAllUsers");

const getAllUsersHandler = async (req, res) => {
  try {
    const {
      name,
      minZipCode,
      maxZipCode,
      country,
      state,
      city,
      isActive,
      isAdmin,
      email,
      lastname,
      orderType,
      order,
      address,
      provider,
      newsLetter,
    } = req.body;

    const allUsers = await getAllUsers(
      name,
      minZipCode,
      maxZipCode,
      country,
      state,
      city,
      isActive,
      isAdmin,
      email,
      lastname,
      orderType,
      order,
      address,
      provider,
      newsLetter
    );

    res.status(200).json(allUsers);
  } catch (error) {
    console.log("Error getting users", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getAllUsersHandler;
