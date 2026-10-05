require("dotenv").config();

const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const { data } = require("./data.js");

const MONGO_URL = process.env.ATLASDB_URL;

async function main() {
  await mongoose.connect(MONGO_URL);
  console.log("Connected to MongoDB Atlas");
}

main()
  .then(async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(data);

    console.log("Data was seeded successfully");

    await mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });