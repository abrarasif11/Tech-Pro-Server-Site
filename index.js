const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());


const courses = require("./data/learning.json");


app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  // console.log(id);
  console.log(courses);
  const selectedCourse = courses.find((item) => item.id == id);
  console.log(selectedCourse);
  res.send(selectedCourse);
});

app.get("/", (req, res) => {
  res.send("Learn With Us");
});

app.listen(port, () => {
  console.log("Learn With Us:", port);
});

