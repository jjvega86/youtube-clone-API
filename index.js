const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://jjvega86:UMsL201vRv75iYIm@cluster0.nm4by.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((err) => {
    console.log(`Could not connect to MongoDb. ERROR: ${err}`);
  });
