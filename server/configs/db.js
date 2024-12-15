const mongoose = require("mongoose");
const { DATABASE_URL } = require("../constants/env");

 const connectToDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI ||
        DATABASE_URL,
      {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        dbName: "PlacesApplication",
      }
    );

    console.log('successfully to connected database!')
  } catch (error) {
    throw new Error("Error connecting to database, check Internet-Connection or mongo-URI")
  }
};

module.exports = connectToDB;