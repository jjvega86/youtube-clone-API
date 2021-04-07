const mongoose = require("mongoose");
const config = require("config");

function connectDb() {
  mongoose
    .connect(config.get("mongoURI"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB...");
    })
    .catch((err) => {
      console.log(`Could not connect to MongoDb. ERROR: ${err}`);
      process.exit(1);
    });
}

module.exports = connectDb;
