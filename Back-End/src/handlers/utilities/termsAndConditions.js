//? Dependencies
const fs = require("fs");
const path = require("path");

const termsAndConditions = (req, res) => {
  const termsAndConditionsHTML = fs.readFileSync(
    path.join(__dirname, "../../utilities/termsAndConditions.html"),
    "utf-8"
  );

  res.send(termsAndConditionsHTML);
};

module.exports = termsAndConditions;
