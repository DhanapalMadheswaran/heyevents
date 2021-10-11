const express = require("express");

const router = express.Router();

const Vendor = require("../../models/vendorModel");
const authverify = require("../../middlewares/check-auth");
router.get("/", authverify, async (req, res) => {
  Vendor.find().then((data) => {
    res.json(data);
  });
});
//Get Latest For Frontend
router.get("/getLatest", async (req, res) => {
  Vendor.find()
    .sort({ _id: -1 })
    .limit(10)
    .then((data) => {
      res.json(data);
    });
});

//Get Latest For Frontend
router.get("/getAllVendorsByCategory/:id/", async (req, res) => {
  Promise.all([Vendor.find({ category: req.params.id })]).then((user) => {
    //console.log(("user=%O member=%O", user, member));
    res.status(200).send({
      vendor: user,
    });
  });
});

//description
router.get("/getById/:id/", async (req, res) => {
  Promise.all([
    Vendor.find({ _id: req.params.id }),
    Vendor.find({ _id: { $ne: req.params.id } }),
  ]).then(([user, member]) => {
    //console.log(("user=%O member=%O", user, member));
    res.status(200).send({
      vendor: user,
      related: member,
    });
  });
});

//cartDetails Page
router.get("/getDetailsById/:id/", async (req, res) => {
  Vendor.find({ _id: req.params.id }).then((data) => {
    res.send(data);
  });
});
//Related
router.post("/getRelated", async (req, res) => {
  await Vendor.find({
    $and: [
      {
        _id: { $ne: req.body.id },
        city: { $eq: req.body.city },
      },
    ],
  }).then((data) => {
    res.json(data);
  });
});

router.post("/", async (req, res) => {
  try {
    var emailExists = await Vendor.findOne({ email: req.body.email });

    if (emailExists) {
      return res.status(400).json({
        msg: "Email already Exists",
      });
    }

    const user_data = new Vendor(req.body);

    var data = user_data.save();
    res.json(user_data);
  } catch (error) {
    res.json(error);
  }
});

router.delete("/delete/:id/", async (req, res) => {
  try {
    let response = await Vendor.findOneAndDelete({ _id: req.params.id });

    res.json({
      result: "success",
      message: "Delete Branch Successfully",
    });
  } catch (err) {
    res.status(200).json({ result: "error", message: err.messageFormat });
  }
});

router.put("/update", async (req, res) => {
  Vendor.findByIdAndUpdate(req.body._id, req.body, { new: true })

    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "no user found",
        });
      }

      res.status(200).send(user);
    })

    .catch((err) => {
      return res.status(404).send({
        message: "error while updating the post",
      });
    });
});

module.exports = router;
