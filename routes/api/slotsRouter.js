const express = require("express");
const router = express.Router();

const Slots = require("../../models/slotsModel");

//GET
router.get("/:id/", async (req, res) => {
  await Slots.find({ vendorID: req.params.id }).then((items) => {
    res.status(200).send(items);
  });
});

//INSERT
router.post("/", async (req, res) => {
  try {
    var dateArray = req.body.date;
    for (var i = 0; i < dateArray.length; i++) {
      let user_data = await new Slots({
        vendorID: req.body.vendorID,
        date: dateArray[i],
        slots: req.body.slots,
      });

      user_data.save();
    }
    return res.status(200).json({});
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
