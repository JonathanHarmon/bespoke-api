const mongoose = require("mongoose");

const toyCarSchema = mongoose.Schema(
  {
    make: {
      type: String,
      required: [true, "Please enter a toy car make"],
    },
    model: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const toyCar = mongoose.model("toyCar", toyCarSchema);

module.exports = toyCar;
