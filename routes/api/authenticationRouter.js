const express = require("express");
const User = require("../../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//const { exists } = require("../../models/userModel");

const router = express.Router();

router.post("/register", (req, res) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const user = new User({
      email: req.body.email,
      password: hash,
    });

    User.findOne({ email: req.body.email })
      .then((user1) => {
        if (user1) {
          return res.status(401).json({
            message: "User Already Exist",
          });
        }

        user.save().then((result) => {
          if (!result) {
            return res.status(500).json({
              message: "Error Creating USer",
            });
          }
          res.status(201).json({
            message: "User created!",
            result: result,
          });
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
  });
});

router.post("/login", (req, res) => {
  let fetchedUser;

  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          message: "Auth failed no such user",
        });
      }

      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then((result) => {
      //console.log(fetchedUser);
      if (!result) {
        return res.status(401).json({
          message: "Auth failed inccorect password",
        });
      }
      const token = jwt.sign(
        {
          email1: fetchedUser.email,
          userId: fetchedUser._id,
          role: fetchedUser.role,
        },
        "secret_this_should_be_longer",
        { expiresIn: "1h" }
      );

      res.status(200).json({
        token: token,
        expiresIn: 3600,
        email: fetchedUser.email,
        role: fetchedUser.role,
        name: fetchedUser.name,
        userId: fetchedUser._id,
      });
    })
    .catch((e) => {
      console.log(e);
    });
});

router.post("/user-login", async (req, res) => {
  let fetchedUser;
  try {
    const { email, password } = req.body;
    // validate
    if (!email || !password) {
      //console.log(err);
      return res.send({
        success: false,
        message: "Please fill All Fields",
      });
      //return res.status(400).json({ msg: "Not all fields have been entered." });
    }
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.send({
        success: false,
        message: "Email Not Found",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.send({ message: "Invalid credentials." });
    }
    fetchedUser = user;

    const token = jwt.sign(
      {
        email1: fetchedUser.email,
        userId: fetchedUser._id,
        role: fetchedUser.role,
      },
      "secret_this_should_be_longer",
      { expiresIn: "1h" }
    );
    res.send({
      success: true,
      token,
      user: {
        token: token,
        expiresIn: 3600,
        email: fetchedUser.email,
        role: fetchedUser.role,
        name: fetchedUser.name,
        userId: fetchedUser._id,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;
