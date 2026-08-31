const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");

const MONGO_URL = `mongodb://127.0.0.1:27017/wonderland`;

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.send("Working");
});

// Index route

app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
});

// app.get("/testlisting", async (req, res) => {
//   let sampleListing = new Listing({
//     title: "My New Villa",
//     description: "By the beach",
//     price: 15000,
//     location: "Bay Area, San Fransisco",
//     country: "USA",
//   });
//   await sampleListing.save();
//   console.log("Sample Was Saved");
//   res.send("Successful Testing");
// });

app.listen(8080, () => {
  console.log("Server is listening to port 8080");
});
