const sampleListings = [
  {
    title: "Skyline Penthouse in Manhattan",
    description:
      "A sophisticated penthouse with floor-to-ceiling windows, contemporary interiors, and sweeping views of the Manhattan skyline.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
    },
    price: 420,
    location: "New York City",
    country: "United States",
  },

  {
    title: "Contemporary Villa with Infinity Pool",
    description:
      "A striking modern villa surrounded by greenery, featuring an infinity pool, spacious outdoor areas, and dramatic architectural lines.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1778694276931-056406c4f4d9?auto=format&fit=crop&w=800&q=80",
    },
    price: 520,
    location: "Ubud",
    country: "Indonesia",
  },

  {
    title: "Modern Apartment with City Views",
    description:
      "A stylish urban apartment with clean interiors, large windows, and a convenient location close to restaurants, shopping, and nightlife.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1781512436292-f2687f67f605?auto=format&fit=crop&w=800&q=80",
    },
    price: 185,
    location: "Kuala Lumpur",
    country: "Malaysia",
  },

  {
    title: "Minimalist Designer Apartment",
    description:
      "A beautifully designed apartment with warm wood, modern furniture, and carefully curated interiors for a calm city stay.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1781249144394-c2b5075ebb10?auto=format&fit=crop&w=800&q=80",
    },
    price: 165,
    location: "Vilnius",
    country: "Lithuania",
  },

  {
    title: "Glass House in the Forest",
    description:
      "A secluded contemporary home surrounded by trees, with expansive glass walls that bring the forest directly into the living space.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    price: 310,
    location: "Catskills",
    country: "United States",
  },

  {
    title: "Luxury Beachfront Villa",
    description:
      "An elegant coastal villa steps from the ocean, with bright interiors, a private pool, and generous outdoor living space.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80",
    },
    price: 580,
    location: "Mallorca",
    country: "Spain",
  },

  {
    title: "Modern Mountain Retreat",
    description:
      "A contemporary mountain home combining natural materials, panoramic windows, and peaceful surroundings for a relaxing escape.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=800&q=80",
    },
    price: 340,
    location: "Aspen",
    country: "United States",
  },

  {
    title: "Architectural Villa with Private Pool",
    description:
      "A bold architectural villa featuring geometric forms, an outdoor pool, and spacious terraces designed for long summer evenings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
    },
    price: 495,
    location: "Mykonos",
    country: "Greece",
  },

  {
    title: "Luxury Apartment in Downtown Dubai",
    description:
      "A polished high-rise apartment with contemporary furnishings, expansive windows, and easy access to Dubai's major attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
    },
    price: 290,
    location: "Dubai",
    country: "United Arab Emirates",
  },

  {
    title: "Cliffside Home Above the Mediterranean",
    description:
      "A dramatic coastal retreat perched above the Mediterranean, offering sweeping sea views and a peaceful private terrace.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
    },
    price: 460,
    location: "Santorini",
    country: "Greece",
  },

  {
    title: "Industrial Loft in Chicago",
    description:
      "A spacious converted loft with exposed materials, high ceilings, oversized windows, and a distinctly urban character.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=800&q=80",
    },
    price: 235,
    location: "Chicago",
    country: "United States",
  },

  {
    title: "Modern Courtyard House",
    description:
      "A peaceful contemporary house built around a private courtyard, combining indoor comfort with seamless outdoor living.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
    },
    price: 275,
    location: "Austin",
    country: "United States",
  },

  {
    title: "Luxury Villa in the Tuscan Hills",
    description:
      "A refined countryside villa surrounded by rolling hills, featuring elegant interiors, gardens, and relaxing outdoor spaces.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
    },
    price: 430,
    location: "Tuscany",
    country: "Italy",
  },

  {
    title: "Oceanfront House in Malibu",
    description:
      "A bright contemporary beach house overlooking the Pacific, with spacious living areas and a terrace made for sunset views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    },
    price: 650,
    location: "Malibu",
    country: "United States",
  },

  {
    title: "Modern Townhouse in London",
    description:
      "A sophisticated townhouse blending classic neighborhood character with modern interiors, comfortable bedrooms, and stylish living spaces.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80",
    },
    price: 270,
    location: "London",
    country: "United Kingdom",
  },

  {
    title: "Forest Cabin with Panoramic Windows",
    description:
      "A cozy modern cabin hidden among tall trees, with panoramic windows overlooking the surrounding forest and mountains.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
    },
    price: 245,
    location: "Whistler",
    country: "Canada",
  },

  {
    title: "Modern Villa on the Amalfi Coast",
    description:
      "A sun-filled coastal villa with Mediterranean architecture, a private terrace, and breathtaking views over the sea.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    },
    price: 540,
    location: "Amalfi",
    country: "Italy",
  },

  {
    title: "Designer Apartment in Tokyo",
    description:
      "A compact but sophisticated apartment with minimalist interiors, smart use of space, and easy access to central Tokyo.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=800&q=80",
    },
    price: 175,
    location: "Tokyo",
    country: "Japan",
  },

  {
    title: "Private Villa in the Balinese Highlands",
    description:
      "A peaceful tropical villa surrounded by lush vegetation, with an open living area and a private pool overlooking the jungle.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=800&q=80",
    },
    price: 260,
    location: "Bali",
    country: "Indonesia",
  },

  {
    title: "Contemporary House with Garden",
    description:
      "A spacious modern home surrounded by a landscaped garden, featuring large windows and comfortable indoor-outdoor living areas.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80",
    },
    price: 225,
    location: "Portland",
    country: "United States",
  },

  {
    title: "High-Rise Residence in Singapore",
    description:
      "A sleek city residence in a modern high-rise, offering elegant interiors, impressive views, and convenient access to the city.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
    },
    price: 240,
    location: "Singapore",
    country: "Singapore",
  },

  {
    title: "Mountain Chalet by the Lake",
    description:
      "A warm wooden chalet near a crystal-clear lake, surrounded by mountains and designed for peaceful weekends in nature.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    },
    price: 330,
    location: "Interlaken",
    country: "Switzerland",
  },

  {
    title: "Modern Desert Villa",
    description:
      "A striking desert retreat with minimalist architecture, wide-open views, and a private outdoor area beneath dramatic skies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
    },
    price: 285,
    location: "Joshua Tree",
    country: "United States",
  },

  {
    title: "Modern Waterfront Home",
    description:
      "A contemporary waterfront residence with expansive glass doors, a private deck, and peaceful views over the surrounding landscape.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=80",
    },
    price: 295,
    location: "Seattle",
    country: "United States",
  },

  {
    title: "Luxury Apartment in Barcelona",
    description:
      "A bright designer apartment combining contemporary furniture with Mediterranean character, located near Barcelona's best neighborhoods.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
    },
    price: 215,
    location: "Barcelona",
    country: "Spain",
  },

  {
    title: "Modern Hillside Home in Cape Town",
    description:
      "A stylish hillside residence with expansive windows, contemporary interiors, and spectacular views across the city and coastline.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    price: 260,
    location: "Cape Town",
    country: "South Africa",
  },

  {
    title: "Contemporary Apartment in Amsterdam",
    description:
      "A refined apartment with modern interiors and large windows, positioned close to canals, cafes, museums, and city attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    },
    price: 230,
    location: "Amsterdam",
    country: "Netherlands",
  },

  {
    title: "Luxury Coastal Retreat in Maui",
    description:
      "A relaxed island retreat with bright open interiors, tropical landscaping, and easy access to beaches and coastal trails.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
    price: 475,
    location: "Maui",
    country: "United States",
  },

  {
    title: "Modern Residence in Copenhagen",
    description:
      "A clean Scandinavian-inspired residence with functional design, warm interiors, and a quiet location close to the city center.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    },
    price: 205,
    location: "Copenhagen",
    country: "Denmark",
  },

  {
    title: "Private Pool Villa in Phuket",
    description:
      "A tropical private villa with a swimming pool, open living spaces, and lush surroundings just minutes from the coast.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
    },
    price: 310,
    location: "Phuket",
    country: "Thailand",
  },

  {
    title: "Modern Apartment Building Residence",
    description:
      "A contemporary residence inside a striking modern apartment building, with clean architecture, balconies, and plenty of natural light.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1781512436292-f2687f67f605?auto=format&fit=crop&w=800&q=80",
    },
    price: 190,
    location: "Kuala Lumpur",
    country: "Malaysia",
  },
];

module.exports = { data: sampleListings };