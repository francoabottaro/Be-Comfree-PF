//? Dependencies
const getColours = require("../../controllers/utilities/getColours");

const getColoursHandler = async (req, res) => {
  try {
    const allColours = await getColours();

    if (!allColours) {
      return res.status(404).send("No colours found");
    }

    return res.status(200).json(allColours);
  } catch (error) {
    console.log("Error getting colours", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getColoursHandler;
