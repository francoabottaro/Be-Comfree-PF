//? Dependencies
const resetPasswordForm = require("../../controllers/user/resetPasswordForm");

const resetPasswordFormHandler = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    const userChange = await resetPasswordForm(token, password);
    if (userChange) return res.json(userChange);
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};
module.exports = resetPasswordFormHandler;
