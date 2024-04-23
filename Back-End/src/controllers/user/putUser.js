//? Dependencies
const { user } = require("../../db");
const bcrypt = require("bcrypt");

const putUser = async (id, newUserData) => {
  try {
    const userData = await user.findOne({ where: { id } });

    let hashedPassword = userData.password;
    if (newUserData.hasOwnProperty("password")) {
      const salts = 10;
      hashedPassword = await bcrypt.hash(newUserData.password, salts);
    }

    userData.name = newUserData.hasOwnProperty("name")
      ? newUserData.name
      : userData.name;
    userData.lastname = newUserData.hasOwnProperty("lastname")
      ? newUserData.lastname
      : userData.lastname;
    userData.email = newUserData.hasOwnProperty("email")
      ? newUserData.email
      : userData.email;
    userData.password = hashedPassword;
    userData.birthdate = newUserData.hasOwnProperty("birthdate")
      ? newUserData.birthdate
      : userData.birthdate;
    userData.isActive = newUserData.hasOwnProperty("isActive")
      ? newUserData.isActive
      : userData.isActive;
    userData.isAdmin = newUserData.hasOwnProperty("isAdmin")
      ? newUserData.isAdmin
      : userData.isAdmin;
    userData.phone = newUserData.hasOwnProperty("phone")
      ? newUserData.phone
      : userData.phone;
    userData.newsLetter = newUserData.hasOwnProperty("newsLetter")
      ? newUserData.newsLetter
      : userData.newsLetter;
    userData.address = newUserData.hasOwnProperty("address")
      ? newUserData.address
      : userData.address;
    userData.city = newUserData.hasOwnProperty("city")
      ? newUserData.city
      : userData.city;
    userData.state = newUserData.hasOwnProperty("state")
      ? newUserData.state
      : userData.state;
    userData.country = newUserData.hasOwnProperty("country")
      ? newUserData.country
      : userData.country;
    userData.zipcode = newUserData.hasOwnProperty("zipcode")
      ? newUserData.zipcode
      : userData.zipcode;
    userData.profilePicture = newUserData.hasOwnProperty("profilePicture")
      ? newUserData.profilePicture
      : userData.profilePicture;

    await userData.save();
    return { success: true, user: userData };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = putUser;
