const express = require("express");
const router = express.Router();

const Slot = require("../../models/slotsModel");

//GET
router.get("/", async (req, res) => {
  Category.find().then((items) => {
    res.json(items);
  });
});

//INSERT
router.post("/", async (req, res) => {
  try {
    const user_data = await new Slot({
      vendorID: req.body.vendorID,
      dates: req.body.dates,
      slots: req.body.slots,
    });
    var data = user_data
      .save()
      .then(() => {
        res.status(200).json(data);
      })
      .catch((e) => {
        res.status(500).json(e);
      });
  } catch (err) {
    res.status(500).json(err.response);
  }
});

//UPDATE
router.put("/update", async (req, res) => {
  //console.log("req.file");
  try {
    const updata = await Category.findByIdAndUpdate(
      req.body._id,
      {
        name: req.body.name,
        image: req.body.image,
      },
      { new: true },
      function (err, response) {
        if (err) {
          res.json({
            message: "Update Failure",
          });
        }
        res.json({
          message: "Updated",
        });
      }
    );
    //console.log(updata);
  } catch (error) {
    res.json(error);
  }
});

//DELETE
router.delete("/delete/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    let response = await Category.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ result: "success" });
  } catch (err) {
    res.status(200).json({ result: "error", message: err.messageFormat });
  }
});

//Slider Part

module.exports = router;
