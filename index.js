const app = require("./app");
const config = require("./config/config");
const PORT = config.app.port;

app.listen(PORT, () => {
  console.log(`app in running on http://localhost:${PORT}`);
  //   await connectDB();
});

// server run command
// npm start
