//? Dependencies
const putUserNews = require("../../controllers/user/putNewsUser");

const putNewsUserHandler = async (req, res) => {
  try {
    const { id } = req.query;

    const user = await putUserNews(id);
    if (!user) {
      return res.send("Unsubscription error");
    }
    return res.redirect(
      "https://pf-indumentario-ecommerce-front.vercel.app/unsubscribe"
    ); //! Ruta del FRONT
  } catch (error) {
    console.log("Error unsubscripting user", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = putNewsUserHandler;
