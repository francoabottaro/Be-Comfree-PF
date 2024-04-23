//? Dependencies
const getMaterials = require("../../controllers/utilities/getMaterials");

const getMaterialsHandler = async (req, res) => {
  try {
    const allMaterials = await getMaterials();

    if (!allMaterials) {
      return res.status(404).send("No material found");
    }

    return res.status(200).json(allMaterials);
  } catch (error) {
    console.log("Error getting materials", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getMaterialsHandler;
