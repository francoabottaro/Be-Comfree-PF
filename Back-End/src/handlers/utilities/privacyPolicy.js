//? Dependencies
const fs = require("fs");
const path = require("path");

const privacyPolicy = (req, res) => {
  const privacyPolicyHTML = fs.readFileSync(
    path.join(__dirname, "../../utilities/privacyPolicy.html"),
    "utf-8"
  );

  res.send(privacyPolicyHTML);
};

module.exports = privacyPolicy;
