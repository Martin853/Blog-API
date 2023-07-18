require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const postsRoutes = require("./routes/posts");

// Initialized App

const app = express();

// Middleware

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Setup routes

app.use("/api/posts", postsRoutes);

// Listen

const PORT = process.env.PORT;

// Connect to db and listen

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Connected to database, Listening on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
