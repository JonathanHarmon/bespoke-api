const toyCar = require("../models/toyCarModel");
const asyncHandler = require("express-async-handler");

// Get all cars

const getCars = asyncHandler(async (req, res) => {
  try {
    const toycars = await toyCar.find({});
    res.status(200).json(toycars);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// Get car by ID

const getCarsByID = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const toycar = await toyCar.findById(id);
    res.status(200).json(toycar);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// Get car by starting character

const getCarsByStartingCharacters = asyncHandler(async (req, res) => {
  let char = "G";
  try {
    const toycar = await toyCar.find({
      make: { $regex: "^" + char, $options: "i" },
    });
    res.status(200).json(toycar);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// Add car to database

const addCarToDatabase = asyncHandler(async (req, res) => {
  try {
    const toycar = await toyCar.create(req.body);
    res.status(200).json(toycar);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// Update car by ID

const updateCar = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const toycar = await toyCar.findByIdAndUpdate(id, req.body);
    if (!toycar) {
      return res
        .status(404)
        .json({ message: `cannot find any car with ID ${id}` });
    }
    const updatedToyCar = await toyCar.findById(id);
    res.status(200).json(updatedToyCar);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// Delete car

const deleteCar = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const toycar = await toyCar.findByIdAndDelete(id);
    if (!toycar) {
      res.status(404);
      throw new Error(`cannot find a toy car with ID ${id}`);
    }
    res.status(200).json(toycar);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

module.exports = {
  getCars,
  getCarsByID,
  getCarsByStartingCharacters,
  addCarToDatabase,
  updateCar,
  deleteCar,
};
