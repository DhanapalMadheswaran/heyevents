const mongoose = require("mongoose");
const SlotsSchema = mongoose.Schema({
  vendorID: {
    type: String,
    required: true,
  },
  dates: {
    type: Array,
    required: true,
  },
  slots: {
    type: Array,
    required: true,
  },
});
module.exports = mongoose.model("slots", SlotsSchema);
