//? Dependencies
const { user } = require("../../db");
const { Op } = require("sequelize");

const getAllUsers = async (
  name,
  minZipCode,
  maxZipCode,
  country,
  state,
  city,
  isActive,
  isAdmin,
  email,
  lastname,
  orderType,
  order,
  address,
  provider,
  newsLetter
) => {
  try {
    const filters = {};
    if (name !== undefined) filters.name = { [Op.iLike]: `%${name}%` };
    if (lastname !== undefined)
      filters.lastname = { [Op.iLike]: `%${lastname}%` };
    if (email !== undefined) filters.email = { [Op.iLike]: `%${email}%` };
    if (country !== undefined) filters.country = { [Op.iLike]: `%${country}%` };
    if (city !== undefined) filters.city = { [Op.iLike]: `%${city}%` };
    if (address !== undefined) filters.address = { [Op.iLike]: `%${address}%` };
    if (state !== undefined) filters.state = { [Op.iLike]: `%${state}%` };
    if (isAdmin !== undefined) filters.isAdmin = { [Op.eq]: isAdmin };
    if (isActive !== undefined) filters.isActive = { [Op.eq]: isActive };
    if (provider !== undefined) filters.provider = { [Op.eq]: provider };
    if (newsLetter !== undefined) filters.newsLetter = { [Op.eq]: newsLetter };
    if (minZipCode !== undefined || maxZipCode !== undefined) {
      filters.zipcode = {
        [Op.between]: [
          minZipCode !== undefined ? minZipCode : 0,
          maxZipCode !== undefined ? maxZipCode : Number.MAX_SAFE_INTEGER,
        ],
      };
    }

    const filteredUsers = await user.findAll({
      where: filters,
      order: [[orderType ? orderType : "name", order ? order : "ASC"]],
    });

    return filteredUsers;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = getAllUsers;
