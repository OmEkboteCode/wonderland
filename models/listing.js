const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },

  image: {
    filename: {
      type: String,
      default: "listingimage",
    },

    url: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jPZOsnVMmjOcyXeened8HSW2p-KVcPTHH8KtJ_gOqmpTx0mEjMfolBI2&s=10",

      set: (v) =>
        v === ""
          ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jPZOsnVMmjOcyXeened8HSW2p-KVcPTHH8KtJ_gOqmpTx0mEjMfolBI2&s=10"
          : v,
    },
  },

  price: {
    type: Number,
  },

  location: {
    type: String,
  },

  country: {
    type: String,
  },
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;