const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  id: {
    type: String,
    reuire: true,
  },
  name: {
    type: String,
    reuire: true,
  },
  //   age: {
  //     type: String,
  //     reuire: true,
  //   },
  createdOn: {
    type: String,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
