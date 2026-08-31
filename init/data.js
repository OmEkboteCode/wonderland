const sampleListings = [
  {
    title: "Sunlit Studio Near Central Park",
    description:
      "A bright and comfortable studio in a quiet Manhattan neighborhood, within easy reach of Central Park, cafes, and subway stations.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    },
    price: 185,
    location: "New York City",
    country: "United States",
  },

  {
    title: "Cliffside Cabin Overlooking the Pacific",
    description:
      "Wake up to ocean views from this peaceful cabin tucked into the Big Sur coastline. Ideal for a quiet weekend surrounded by nature.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=800&q=80",
    },
    price: 320,
    location: "Big Sur",
    country: "United States",
  },

  {
    title: "Brownstone Retreat in Brooklyn",
    description:
      "Stay in a beautifully restored brownstone with exposed brick, warm interiors, and some of Brooklyn's best cafes just around the corner.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
    },
    price: 240,
    location: "Brooklyn",
    country: "United States",
  },

  {
    title: "Desert Casita Under the Stars",
    description:
      "A cozy desert hideaway with wide-open views and a peaceful outdoor space for watching the sunset and stargazing at night.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
    },
    price: 210,
    location: "Joshua Tree",
    country: "United States",
  },

  {
    title: "Lake House on Lake Tahoe",
    description:
      "Relax beside the lake in this spacious retreat with a private deck, mountain views, and easy access to hiking trails.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
    },
    price: 390,
    location: "Lake Tahoe",
    country: "United States",
  },

  {
    title: "Historic Guesthouse in Savannah",
    description:
      "A charming guesthouse in Savannah's historic district, surrounded by tree-lined streets, local restaurants, and historic squares.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    price: 175,
    location: "Savannah",
    country: "United States",
  },

  {
    title: "Modern Loft in Downtown Chicago",
    description:
      "A stylish downtown loft with large windows and plenty of natural light, close to restaurants, museums, and the riverwalk.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    },
    price: 220,
    location: "Chicago",
    country: "United States",
  },

  {
    title: "Mountain Lodge in Aspen",
    description:
      "A warm and spacious mountain lodge with a fireplace and sweeping views of the Rockies, perfect after a day outdoors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
    },
    price: 450,
    location: "Aspen",
    country: "United States",
  },

  {
    title: "Beach House on Maui",
    description:
      "A relaxed island home a short walk from the beach, with an outdoor dining area made for slow mornings and sunset dinners.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80",
    },
    price: 420,
    location: "Maui",
    country: "United States",
  },

  {
    title: "Cozy Cabin in the Smoky Mountains",
    description:
      "Escape into the mountains with this secluded cabin surrounded by trees, hiking trails, and peaceful views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=800&q=80",
    },
    price: 195,
    location: "Gatlinburg",
    country: "United States",
  },

  {
    title: "Art-Filled Home in Austin",
    description:
      "A colorful and comfortable home in one of Austin's lively neighborhoods, surrounded by local food, music, and independent shops.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
    },
    price: 160,
    location: "Austin",
    country: "United States",
  },

  {
    title: "Waterfront Cottage in Portland",
    description:
      "A quiet cottage near the water with a small garden and cozy interiors, perfect for travelers looking for a slower pace.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=80",
    },
    price: 180,
    location: "Portland",
    country: "United States",
  },

  {
    title: "Rooftop Apartment in Miami Beach",
    description:
      "A bright coastal apartment close to the beach, featuring a rooftop terrace and easy access to Miami's restaurants and nightlife.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=800&q=80",
    },
    price: 275,
    location: "Miami Beach",
    country: "United States",
  },

  {
    title: "Forest Retreat Near Seattle",
    description:
      "A modern woodland home surrounded by tall trees, offering a peaceful escape while remaining close enough for a day trip into Seattle.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
    },
    price: 230,
    location: "Seattle",
    country: "United States",
  },

  {
    title: "Historic Townhouse in Boston",
    description:
      "Stay in a classic Boston townhouse with original character, comfortable living spaces, and easy access to the city's historic neighborhoods.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80",
    },
    price: 250,
    location: "Boston",
    country: "United States",
  },

  {
    title: "Glass House in the Catskills",
    description:
      "A peaceful modern cabin with floor-to-ceiling windows overlooking the forest, designed for reading, relaxing, and disconnecting.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=800&q=80",
    },
    price: 340,
    location: "Catskills",
    country: "United States",
  },

  {
    title: "Canal-Side Apartment in Amsterdam",
    description:
      "A comfortable apartment overlooking one of Amsterdam's iconic canals, within walking distance of museums, cafes, and historic streets.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    },
    price: 210,
    location: "Amsterdam",
    country: "Netherlands",
  },

  {
    title: "Stone Cottage in the Scottish Highlands",
    description:
      "A traditional stone cottage surrounded by dramatic landscapes, quiet roads, and some of Scotland's most beautiful hiking routes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
    },
    price: 190,
    location: "Scottish Highlands",
    country: "United Kingdom",
  },

  {
    title: "Riad Courtyard in Marrakech",
    description:
      "Stay inside a traditional riad featuring a peaceful courtyard, colorful details, and a central location in the heart of Marrakech.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=800&q=80",
    },
    price: 145,
    location: "Marrakech",
    country: "Morocco",
  },

  {
    title: "Cliffside Villa in Santorini",
    description:
      "A peaceful island villa with expansive Aegean views, whitewashed interiors, and a terrace made for watching the sunset.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
    },
    price: 480,
    location: "Santorini",
    country: "Greece",
  },

  {
    title: "Alpine Chalet Near Interlaken",
    description:
      "A cozy Swiss chalet surrounded by mountain scenery, with easy access to lakes, hiking trails, and nearby villages.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    },
    price: 310,
    location: "Interlaken",
    country: "Switzerland",
  },

  {
    title: "Minimalist Apartment in Tokyo",
    description:
      "A compact modern apartment in a convenient Tokyo neighborhood, surrounded by restaurants, shops, and excellent train connections.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=800&q=80",
    },
    price: 155,
    location: "Tokyo",
    country: "Japan",
  },

  {
    title: "Jungle Villa in Ubud",
    description:
      "A tranquil villa surrounded by tropical greenery, offering a private pool and a quiet base for exploring Bali's cultural heartland.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=800&q=80",
    },
    price: 230,
    location: "Ubud",
    country: "Indonesia",
  },

  {
    title: "Overwater Bungalow in Bora Bora",
    description:
      "Wake up above crystal-clear water in this private island bungalow with a spacious deck and uninterrupted lagoon views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
    price: 650,
    location: "Bora Bora",
    country: "French Polynesia",
  },
];

module.exports = { data: sampleListings };