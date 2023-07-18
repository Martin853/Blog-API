require("dotenv").config();
const express = require("express");
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

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
