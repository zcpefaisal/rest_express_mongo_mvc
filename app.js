const express = require("express");
const cors = require("cors");
// const mongoose = require("mongoose");
require("./config/db");

const userRouter = require("./routes/user.route");

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/./views/index.html");
});

// route not found error
app.use((req, res, next) => {
  res.status(404).json({
    message: "route not found",
  });
});

// handaling server error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "internal server error",
  });
});

// MongoDB connect in express vaia mongoose
// connection type 1 (syncrnous process)
// mongoose
//   .connect("mongodb://localhost:27017/rest_express_mongo_mvc_db")
//   .then(() => {
//     console.log("DB is connected");
//   })
//   .catch((error) => {
//     console.log("DB not connectd");
//     console.log(error);
//      process.exit(1);
//   });

// connection type 2 (asyncrnous process)
// const connectDB = async () => {
//   try {
//     mongoose.connect("mongodb://localhost:27017/rest_express_mongo_mvc_db");
//     console.log("DB is connected");
//   } catch (error) {
//     console.log("DB not connectd");
//     console.log(error);
//     process.exit(1);
//   }
// };

module.exports = app;
