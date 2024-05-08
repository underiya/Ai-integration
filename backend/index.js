const { generate } = require("./config");

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.post("/", async (req, res) => {
  const { prompt } = req.body;
  try {
    let data = await generate(prompt);
    res.status(201).json({ msg: "done", data });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
});

app.listen(process.env.port, () => {
  console.log(`server is running at ${process.env.port}`);
});
