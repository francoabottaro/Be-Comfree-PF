//? Dependencies
const { product } = require("../../db");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();

//? Cloudinary configuration
const { CLOUD_NAME, CLOUD_KEY, CLOUD_SECRET_KEY } = process.env;
cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: CLOUD_KEY,
  api_secret: CLOUD_SECRET_KEY,
});

const postProduct = async (
  name,
  price,
  gender,
  images,
  colour,
  material,
  category,
  description
) => {
  try {
    let cloudinaryImages = [];
    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.uploader.upload(images[i], {
        folder: "Be comfree",
      });
      cloudinaryImages.push(result.secure_url);
    }
    const newProduct = await product.create({
      name,
      price,
      gender,
      images: cloudinaryImages,
      colour,
      material,
      category,
      description,
    });
    return newProduct;
  } catch (error) {
    console.error("Error creating the product:", error);
    throw error;
  }
};

module.exports = postProduct;
