const { validateUser, User } = require("../../models/user");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const _ = require("lodash");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const config = require("config");

router.post("/", async (req, res) => {
  console.log("user: ", req);
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).send("User already registered");
  }

  user = new User(_.pick(req.body, ["name", "email", "password"]));
  console.log("user: ", user);
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  user = await user.save();

  //   const token = jwt.sign({ _id: user._id }, config.get("jwtKey"));
  //   res.header("x-auth-token", token).send(_.pick(user, ["name", "email"]));
  res.send("Done");
});

router.get("/", async (req, res) => {
  const users = await User.find();
  if (users != null) {
    res.send(users);
  }
  res.send({ name: "Bhavesh", title: "Backend Engineer" });
});

router.get("/allId", async (req, res) => {
  const users = await User.find();
  if (users != null) {
    const ids = users.map((vid) => {
      return vid.id;
    });
    res.send(ids);
  } else {
    res.send({ name: "Bhavesh", title: "Backend Engineer" });
  }
});
router.get("/populate", async (req, res) => {
  const usersData = [
    {
      name: "Michael",
      email: "michael@example.com",
      password: "michael123",
    },
    {
      name: "Sophia",
      email: "sophia@example.com",
      password: "sophia123",
    },
    {
      name: "David",
      email: "david@example.com",
      password: "david123",
    },
    {
      name: "Emma",
      email: "emma@example.com",
      password: "emma123",
    },
    {
      name: "Daniel",
      email: "daniel@example.com",
      password: "daniel123",
    },
  ];
  // Increase timeout to 30 seconds (30000 milliseconds)
  User.insertMany(usersData)
    .then((users) => {
      console.log("Users inserted successfully:", users);
    })
    .catch((error) => {
      console.error("Error inserting users:", error);
    });
  res.send("Populated");
});

module.exports = router;
