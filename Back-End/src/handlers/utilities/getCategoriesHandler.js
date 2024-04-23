//? Dependencies
const getCategories = require("../../controllers/utilities/getCategories");

const getCategoriesHandler = async (req, res) => {
  try {
    const allCategories = await getCategories();

    if (!allCategories) {
      return res.status(404).send("No category found");
    }

    return res.status(200).json(allCategories);
  } catch (error) {
    console.log("Error getting categories", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getCategoriesHandler;
