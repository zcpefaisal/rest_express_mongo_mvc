const mongoose = require("mongoose");
const config = require("./config");

const DBURL = config.db.url;

// db connect with manual connect
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

mongoose
  .connect(DBURL)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((error) => {
    console.log("MongoDB not connectd");
    console.log(error);
    process.exit(1);
  });
