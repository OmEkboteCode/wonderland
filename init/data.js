const sampleListings = [
  {
    title: "Modern Glass House",
    description:
      "A stunning modern home surrounded by nature with floor-to-ceiling windows and beautiful views.",
    image: {
      filename: "listing-image",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    },
    price: 240,
    location: "Lake Tahoe",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-120.0324, 39.0968],
    },
    categories: "Mountains",
  },

  {
    title: "Luxury Beach Villa",
    description:
      "A peaceful beachfront villa with a private pool and direct access to the ocean.",
    image: {
      filename: "listing-image",
      url: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80",
    },
    price: 420,
    location: "Bali",
    country: "Indonesia",
    geometry: {
      type: "Point",
      coordinates: [115.1889, -8.4095],
    },
    categories: "Amazing Pools",
  },

  {
    title: "Cozy Alpine Cabin",
    description:
      "A warm wooden cabin surrounded by snow-covered mountains, perfect for a peaceful getaway.",
    image: {
      filename: "listing-image",
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
    },
    price: 180,
    location: "Zermatt",
    country: "Switzerland",
    geometry: {
      type: "Point",
      coordinates: [7.7491, 46.0207],
    },
    categories: "Mountains",
  },

  {
    title: "Parisian Apartment",
    description:
      "Elegant apartment in the heart of Paris with classic architecture and city views.",
    image: {
      filename: "listing-image",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    },
    price: 210,
    location: "Paris",
    country: "France",
    geometry: {
      type: "Point",
      coordinates: [2.3522, 48.8566],
    },
    categories: "Iconic Cities",
  },

  {
    title: "Santorini Cliff House",
    description:
      "A beautiful whitewashed home overlooking the Aegean Sea with a spectacular sunset view.",
    image: {
      filename: "listing-image",
      url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80",
    },
    price: 350,
    location: "Santorini",
    country: "Greece",
    geometry: {
      type: "Point",
      coordinates: [25.4615, 36.3932],
    },
    categories: "Trending",
  },

  {
    title: "Scottish Castle Stay",
    description:
      "Experience historic Scotland from a beautifully restored stone castle surrounded by countryside.",
    image: {
      filename: "listing-image",
      url: "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?auto=format&fit=crop&w=1200&q=80",
    },
    price: 500,
    location: "Edinburgh",
    country: "United Kingdom",
    geometry: {
      type: "Point",
      coordinates: [-3.1883, 55.9533],
    },
    categories: "Castles",
  },

  {
    title: "Icelandic Glass Cabin",
    description:
      "Sleep beneath the northern lights in this cozy glass cabin surrounded by Icelandic wilderness.",
    image: {
      filename: "listing-image",
      url: "https://images.unsplash.com/photo-1520986606214-8b456906c813?auto=format&fit=crop&w=1200&q=80",
    },
    price: 290,
    location: "Reykjavik",
    country: "Iceland",
    geometry: {
      type: "Point",
      coordinates: [-21.9426, 64.1466],
    },
    categories: "Arctic",
  },

  {
    title: "Amalfi Coast Villa",
    description:
      "A colorful Mediterranean villa overlooking the cliffs and sparkling waters of the Amalfi Coast.",
    image: {
      filename: "listing-image",
      url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
    },
    price: 390,
    location: "Amalfi",
    country: "Italy",
    geometry: {
      type: "Point",
      coordinates: [14.6029, 40.6340],
    },
    categories: "Trending",
  },

  {
    title: "Desert Dome Retreat",
    description:
      "A futuristic dome stay in the desert with incredible views of the night sky.",
    image: {
      filename: "listing-image",
      url: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=1200&q=80",
    },
    price: 160,
    location: "Joshua Tree",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-116.3131, 34.1347],
    },
    categories: "Domes",
  },

  {
    title: "Venice Canal Apartment",
    description:
      "A charming apartment overlooking one of Venice's beautiful canals, close to historic landmarks.",
    image: {
      filename: "listing-image",
      url: "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1200&q=80",
    },
    price: 230,
    location: "Venice",
    country: "Italy",
    geometry: {
      type: "Point",
      coordinates: [12.3155, 45.4408],
    },
    categories: "Iconic Cities",
  },

  {
    title: "Patagonia Mountain Lodge",
    description:
      "A remote lodge surrounded by dramatic mountains, glaciers, and pristine wilderness.",
    image: {
      filename: "listing-image",
      url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
    },
    price: 260,
    location: "Patagonia",
    country: "Argentina",
    geometry: {
      type: "Point",
      coordinates: [-72.6506, -50.3376],
    },
    categories: "Mountains",
  },

  {
    title: "Norwegian Fjord Cabin",
    description:
      "A peaceful cabin overlooking a dramatic Norwegian fjord with hiking trails nearby.",
    image: {
      filename: "listing-image",
      url: "https://images.unsplash.com/photo-1520986606214-8b456906c813?auto=format&fit=crop&w=1200&q=80",
    },
    price: 220,
    location: "Bergen",
    country: "Norway",
    geometry: {
      type: "Point",
      coordinates: [5.3221, 60.3913],
    },
    categories: "Trending",
  },

  {
    title: "Luxury Swiss Farmhouse",
    description:
      "A traditional farmhouse renovated into a comfortable luxury retreat in the Swiss countryside.",
    image: {
      filename: "listing-image",
      url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    },
    price: 195,
    location: "Interlaken",
    country: "Switzerland",
    geometry: {
      type: "Point",
      coordinates: [7.8632, 46.6863],
    },
    categories: "Farms",
  },

  {
    title: "Floating Houseboat",
    description:
      "A unique houseboat experience with peaceful water views and a relaxing atmosphere.",
    image: {
      filename: "listing-image",
      url: "https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&w=1200&q=80",
    },
    price: 175,
    location: "Amsterdam",
    country: "Netherlands",
    geometry: {
      type: "Point",
      coordinates: [4.9041, 52.3676],
    },
    categories: "Houseboats",
  },

  {
    title: "Canadian Forest Retreat",
    description:
      "A secluded forest cabin surrounded by tall trees, lakes, and peaceful hiking trails.",
    image: {
      filename: "listing-image",
      url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1200&q=80",
    },
    price: 150,
    location: "Banff",
    country: "Canada",
    geometry: {
      type: "Point",
      coordinates: [-115.5708, 51.1784],
    },
    categories: "Camps",
  },
];

module.exports = { data: sampleListings };