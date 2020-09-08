const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");

require("dotenv").config();
//import routes
const userRoutes = require("./routes/user");
//app
const app = express();

//database
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Database Conntcted"));

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
//routes middleware
app.use("/api", userRoutes);
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
