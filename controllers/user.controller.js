const { v4: uuidv4 } = require("uuid");
const User = require("../models/user.model");

const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};

const getOneUser = (req, res) => {
  res.status(200).json({
    message: "Get one user",
  });
};

const createUser = async (req, res) => {
  try {
    const newUser = new User({
      id: uuidv4(),
      name: req.body.name,
      //   age: res.body.age,
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateUser = (req, res) => {
  res.status(200).json({
    message: "user is updated",
  });
};

const deleteUser = (req, res) => {
  res.status(200).json({
    message: "user is deleted",
  });
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
