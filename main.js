import express from "express";
import mongoose from "mongoose";
import Employee from "./models/employee.js";

mongoose.connect("mongodb://localhost:27017/company");

const app = express();
const port = 3000;
app.set("view engine", "ejs");

const getrandom = (arr) => {
  let rno = Math.floor(Math.random() * (arr.length - 1));

  return arr[rno];
};
app.get("/", (req, res) => {
  res.render("index", { foo: "foo" });
});
app.get("/generate", async (req, res) => {
  // clear collection
  await Employee.deleteMany({});

  // generate data

  let randomname = [
    "Alice",
    "Bob",
    "Charlie",
    "Diana",
    "Eva",
    "Frank",
    "Grace",
    "Hank",
    "Ivy",
    "Jack",
  ];

  let randomlang = [
    "Python",
    "C",
    "C++",
    "Java",
    "JavaScript",
    "Ruby",
    "PHP",
    "Swift",
    "Go",
    "Rust",
  ];

  let cityNames = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
  ];
  for (let index = 0; index < 10; index++) {
    let e1 = await Employee.create({
      name: getrandom(randomname),
      salary: Math.floor(Math.random() * 25001),
      language: getrandom(randomlang),
      city: getrandom(cityNames),
      isManager: Math.random() > 0.5 ? true : false,
    });
     
  }
  res.render("index", { foo: "FOO" });
});

 



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
