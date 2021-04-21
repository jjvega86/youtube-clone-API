const connectDb = require("./startup/db");
const express = require("express");
const app = express();
const videos = require('./routes/videos')

connectDb();

app.use(express.json());
app.use('/api/videos', videos)
const port = process.env.port || 5000;
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
