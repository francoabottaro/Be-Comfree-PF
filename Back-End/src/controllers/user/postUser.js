//? Dependencies
const { user } = require("../../db");
const bcrypt = require("bcrypt");

const postUser = async (
  name,
  email,
  lastname,
  birthdate,
  password,
  phone,
  address,
  city,
  state,
  country,
  zipcode,
  newsLetter
) => {
  try {
    const salts = 10;
    const hashedPassword = await bcrypt.hash(password, salts);

    const newUser = await user.create({
      name,
      email,
      lastname,
      birthdate,
      password: hashedPassword,
      phone,
      address,
      city,
      state,
      country,
      zipcode,
      newsLetter,
    });
    return newUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = postUser;
