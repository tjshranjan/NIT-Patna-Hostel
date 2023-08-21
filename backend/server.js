// import express from "express";
// import mongoose from "mongoose";
const express = require('express')
const mongoose = require('mongoose')
// import "dotenv/config";
require('dotenv/config')
const app = express();
// import cors from "cors";
const cors  = require('cors')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.set("strictQuery", false);
const url = process.env.DB_URL;
mongoose.connect(url, { useNewUrlParser: true });
const connection = mongoose.connection;

const StudentModel = require('./models/Student')
const ComplainModel = require('./models/Complain')
const ApplicationModel = require('./models/Application')

connection.once("open", () => {
  console.log(`Mongodb connected...`);
});
app.get("/", (req, res) => {
  res.send("server is running on 5000");
});
app.post("/warden/home", async (req, res) => {
  const { id } = req.body;
  console.log(id);
});
app.post("/warden/home/addstudent", async (req, res) => {
  const { enroll_id, roll, name, email, phone, address, branch, year, room } = req.body;
  console.log(name, enroll_id, email, phone, address);
  const student = new StudentModel({
    enroll_id,
    roll,
    name,
    email,
    phone,
    address,
    branch,
    year,
    room,
  });
  student.save();
  res.send("bhej diya");
});
app.post("/warden/home/search", async (req, res) => {
  const { id } = req.body;
  try {
    const studentDetails = await StudentModel.findOne({ roll: id });
    // console.log(studentDetails)
    res.json(studentDetails);
  } catch (error) {
    console.log(error);
  }
});
app.delete("/warden/home/search/:roll", async (req, res) => {
  const id = req.params.roll;
  const response = await StudentModel.deleteOne({ roll: id });
  res.send(response.status);
});
app.put("/warden/home/search/:roll", async (req, res) => {
  const id = req.params.roll;
  const updatedDetails = req.body;
  // console.log(updatedDetails)
  const response = await StudentModel.findOneAndUpdate(
    { roll: id },
    updatedDetails
  );
  res.send(response.status);
});
app.post("/student", async (req, res) => {
  const { roll } = req.body;
  // console.log(roll)
  try {
    const studentDetails = await StudentModel.findOne({ roll: roll });
    if (studentDetails) res.json(studentDetails.phone);
    else res.send(null);
  } catch (error) {
    console.log(error);
  }
});
app.get("/student/:roll", async (req, res) => {
  const id = req.params.roll;
  try {
    const studentDetails = await StudentModel.findOne({ roll: id });
    res.json(studentDetails);
  } catch (error) {
    console.log(error);
  }
});
app.post("/complain", async (req, res) => {
  const { roll, msg } = req.body;
  const complain = new ComplainModel({
    roll:roll,
    msg:msg,
  });
  complain.save();
  // console.log(complain)
});
app.get("/complain/:roll", async (req, res) => {
  const roll = req.params.roll;
  try {
    const complainList = await ComplainModel.find({ roll: roll });
    // console.log(complainList)
    res.json(complainList);
  } catch (error) {
    console.log(error);
  }
});
app.delete("/complain/:id", async (req, res) => {
  let id = req.params.id;
  try {
    const response = await ComplainModel.deleteOne({ _id: id });
    res.send(response.status);
  } catch (error) {
    console.log(error);
  }
});
app.post("/application", async (req, res) => {
  const { roll, letter } = req.body;
  const application = new ApplicationModel({
    roll,
    letter,
  });
  console.log(application);
  application.save();
});
app.get("/warden/home/complainList", async (req, res) => {
  try {
    const filter = {};
    const complainList = await ComplainModel.find(filter);
    // console.log(complainList)
    res.send(complainList);
  } catch (error) {
    console.log(error);
  }
});
app.get("/warden/home/applicationList", async (req, res) => {
  try {
    const filter = {};
    const applicationList = await ApplicationModel.find(filter);
    res.send(applicationList);
  } catch (error) {
    console.log(error);
  }
});
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
