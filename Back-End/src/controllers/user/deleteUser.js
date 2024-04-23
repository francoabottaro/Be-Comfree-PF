//? Dependencies
const { user } = require("../../db");
const nodemailer = require("nodemailer");
const { plantilla_delete_user } = require("./plantillas_stripo");

const deleteUser = async (id) => {
  try {
    const removedUser = await user.findOne({ where: { id } });

    if (!removedUser) {
      throw new Error("User not found");
    }

    await removedUser.destroy();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "becomfreee@gmail.com",
        pass: "aczt jwha iyfg wotr",
      },
    });

    transporter.sendMail({
      from: "<becomfreee@gmail.com>",
      to: removedUser.dataValues.email,
      subject: "Be comfree",
      html: plantilla_delete_user,
    });

    return { message: "User deleted successfully" };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = deleteUser;
