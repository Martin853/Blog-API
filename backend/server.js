require("dotenv").config();
const express = require("express");

// Initialized App

const app = express();

// Middleware

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Listen

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
