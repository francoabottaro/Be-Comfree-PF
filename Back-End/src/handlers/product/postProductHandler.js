//? Dependencies
const postProduct = require("../../controllers/product/postProduct");

const postProductHandler = async (req, res) => {
  const {
    name,
    price,
    gender,
    images,
    colour,
    material,
    category,
    description,
  } = req.body;

  try {
    if (
      name &&
      price &&
      gender &&
      images &&
      colour &&
      material &&
      category &&
      description
    ) {
      const newProduct = await postProduct(
        name,
        price,
        gender,
        images,
        colour,
        material,
        category,
        description
      );
      if (newProduct) {
        return res.status(200).send("Product created");
      }
    }
    return res.status(400).send("Bad Request! Missing info");
  } catch (error) {
    console.log("Error creating product", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = postProductHandler;
