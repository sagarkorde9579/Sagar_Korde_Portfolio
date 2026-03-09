const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected DB Name:", mongoose.connection.name);
};

module.exports = connectDB;