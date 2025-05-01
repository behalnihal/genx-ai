require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDb = require("./config/db");
const app = express();
const PORT = process.env.PORT || 3000;

connectDb();

app.use(cors());
app.use(express.json());

app.use("/api/auth");
app.use("api/content");
