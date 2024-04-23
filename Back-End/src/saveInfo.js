//? Dependencies
const { product, stock } = require("./db.js");
const API = require("../API.json");

const saveInfo = async () => {
  try {
    API.map(async (eachProduct) => {
      const {
        Name,
        ImageUrl,
        Size,
        Colour,
        Material,
        Price,
        Gender,
        Category,
        Description,
      } = eachProduct;

      const { id } = await product.create({
        name: Name,
        images: ImageUrl,
        size: Size,
        colour: Colour,
        material: Material,
        price: Price,
        gender: Gender,
        category: Category,
        description: Description,
      });

      Colour.map((colour) => {
        Size.map(async (size) => {
          await stock.create({
            colour,
            size,
            amount: Math.floor(Math.random() * 41),
            productId: id,
          });
        });
      });
    });
    console.log("Information saved");
  } catch (error) {
    console.log("Information not saved", error);
  }
};

module.exports = saveInfo;
