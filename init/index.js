require("dotenv").config();

const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");
const { data } = require("./data.js");

const dbUrl = process.env.ATLASDB_URL;

async function main() {
  await mongoose.connect(dbUrl);
  console.log("Connected to MongoDB Atlas");
}

main()
  .then(async () => {
    const user = await User.findOne();

    if (!user) {
      throw new Error("No user found. Please create a user first.");
    }

    const listingsWithOwner = data.map((listing) => ({
      ...listing,
      owner: user._id,
    }));

    await Listing.deleteMany({});

    await Listing.insertMany(listingsWithOwner);

    console.log("Data was seeded successfully");

    await mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });