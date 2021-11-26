const express = require("express");
const router = express.Router();

const Orders = require("../../models/ordersModel");

//GET
router.get("/:id/", async (req, res) => {
  // const users = Orders.aggregate([
  //   { $match: { customer_id: req.params.id } },
  //   { $set: { vendorID: { $toObjectId: "$incharge" } } }, // keep the whole document structure, but replace `incharge` into ObjectId
  //   {
  //     $lookup: {
  //       from: "vendors",
  //       localField: "vendorID", //this is the _id user from tests
  //       foreignField: "id", //this is the _id from users
  //       as: "user",
  //     },
  //   },
  // ]);
  // console.log(users);
  await Orders.find({ customer_id: req.params.id }).then((items) => {
    res.json(items).status(200);
  });
});

//INSERT
router.post("/", async (req, res) => {
  try {
    const user_data = new Orders(req.body);
    var data = user_data.save();
    res.json(data);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
