const express = require("express");
const cors = require("cors");
// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
app.get("/test", (req, res) => {
  res.json("hello");
});
app.listen(4000);
