const express = require("express");
const toyCar = require("../models/toyCarModel");
const {
  getCars,
  getCarsByID,
  getCarsByStartingCharacters,
  addCarToDatabase,
  updateCar,
  deleteCar,
} = require("../controllers/toyCarController");

const router = express.Router();

//get all cars

router.get("/toycars", getCars);

//get car by ID

router.get("/toycars/:id", getCarsByID);

//get car by starting character

router.get("/toycar", getCarsByStartingCharacters);

// add car

router.post("/toycars", addCarToDatabase);

//update car by ID

router.put("/toycars/:id", updateCar);

// delete car by ID

router.delete("/toycars/:id", deleteCar);

module.exports = router;
