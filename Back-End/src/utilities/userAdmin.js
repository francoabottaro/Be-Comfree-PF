//? Dependencies
const { user } = require("../db");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const createAdmin = async () => {
  try {
    password = "hola/1234";

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const adminUser = await user.create({
      name: "Admin",
      lastname: "Istrador",
      birthdate: "2000-01-01",
      phone: "123456789",
      email: "admin@gmail.com",
      password: hashedPassword,
      isAdmin: true,
      address: "Calle Falsa 123",
      city: "Córdoba",
      state: "Córdoba",
      country: "Argentina",
      zipcode: 7777777,
    });
    console.log("Admin created");
    return adminUser;
  } catch (error) {
    console.error("Error creating admin:", error);
  }
};

module.exports = createAdmin;
