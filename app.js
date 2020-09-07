const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

//app
const app = express();

//database
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Database Conntcted"));

//routes
app.get("/", (req, res) => {
  res.send("Hello from node.....");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
