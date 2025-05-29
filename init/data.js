const sampleListings = [
  {
    title: "Elegant Villa in Santorini",
    description: "Breathtaking views of the Aegean Sea in a luxurious cliffside villa.",
    image: {
     path: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    filename: "photo-1501183638710-841dd1904471"
    },
    price: 95000,
    location: "Santorini",
    country: "Greece"
  },
  {
    title: "Scenic Cabin in Norway",
    description: "Cozy wooden cabin with mountain and fjord views.",
    image: {
      path: "https://images.unsplash.com/photo-1588075147961-e0e9670e98aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
    filename: "photo-1588075147961-e0e9670e98aa"
    },
    price: 72000,
    location: "Geiranger",
    country: "Norway"
  },
  {
    title: "Modern Flat in Seoul",
    description: "Trendy city apartment close to shopping and transport.",
    image: {
      path: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1613977257363-707ba9348227"
    },
    price: 50000,
    location: "Gangnam, Seoul",
    country: "South Korea"
  },
  {
    title: "Charming House in Bruges",
    description: "Historic home with canal-side views.",
    image: {
      path: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    filename: "photo-1506748686214-e9df14d4d9d0"
    },
    price: 69000,
    location: "Bruges",
    country: "Belgium"
  },
  {
    title: "Skyline Apartment in Dubai",
    description: "Luxury high-rise with Burj Khalifa views.",
    image: {
      path: "https://images.unsplash.com/photo-1508856699-438d6551d9c1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    filename: "photo-1508856699-438d6551d9c1"
    },
    price: 140000,
    location: "Downtown Dubai",
    country: "UAE"
  },
  {
    title: "Alpine Chalet in Austria",
    description: "Winter wonderland home with skiing access.",
    image: {
      path: "https://images.unsplash.com/photo-1612809451262-9d160c09babb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1612809451262-9d160c09babb"
    },
    price: 87000,
    location: "Innsbruck",
    country: "Austria"
  },
  {
    title: "Colonial Home in Havana",
    description: "Colorful, historic charm in the heart of the city.",
    image: {
      path: "https://images.unsplash.com/photo-1572372633073-b61e9f61197b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1572372633073-b61e9f61197b"
    },
    price: 43000,
    location: "Old Havana",
    country: "Cuba"
  },
  {
    title: "Luxury Estate in Cape Town",
    description: "Modern coastal property with stunning sea views.",
    image: {
      path: "https://images.unsplash.com/photo-1600585153871-6391f4d6b2a1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1600585153871-6391f4d6b2a1"
    },
    price: 128000,
    location: "Camps Bay, Cape Town",
    country: "South Africa"
  },
  {
    title: "Tranquil Cottage in Iceland",
    description: "Remote escape surrounded by nature.",
    image: {
      path: "https://images.unsplash.com/photo-1601628043480-5a99c3f5bc6c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1601628043480-5a99c3f5bc6c"
    },
    price: 62000,
    location: "Höfn",
    country: "Iceland"
  },
  {
    title: "Forest Retreat in Oregon",
    description: "Secluded cabin surrounded by lush greenery.",
    image: {
      path: "https://images.unsplash.com/photo-1508817628294-416b209e1ec5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1508817628294-416b209e1ec5"
    },
    price: 56000,
    location: "Willamette Forest",
    country: "USA"
  },
  {
    title: "City Apartment in Prague",
    description: "Modern apartment in a historic European capital.",
    image: {
      path: "https://images.unsplash.com/photo-1627634763350-2975ff7bc88c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1627634763350-2975ff7bc88c"
    },
    price: 61000,
    location: "Prague",
    country: "Czech Republic"
  },
  {
    title: "Stylish Condo in Vancouver",
    description: "Downtown high-rise with mountain views.",
    image: {
      path: "https://images.unsplash.com/photo-1600585153701-cd3f46b52f99?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1600585153701-cd3f46b52f99"
    },
    price: 97000,
    location: "Vancouver",
    country: "Canada"
  },
  {
    title: "Waterfront Home in Stockholm",
    description: "Modern Scandinavian design by the water.",
    image: {
      path: "https://images.unsplash.com/photo-1598300056845-e84b1c7bd1cf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1598300056845-e84b1c7bd1cf"
    },
    price: 93000,
    location: "Södermalm, Stockholm",
    country: "Sweden"
  },
  {
    title: "Historic Riad in Marrakech",
    description: "Beautifully restored Moroccan house with courtyard.",
    image: {
      path: "https://images.unsplash.com/photo-1618221464340-944cde2ed1da?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1618221464340-944cde2ed1da"
    },
    price: 76000,
    location: "Medina, Marrakech",
    country: "Morocco"
  },
  {
    title: "Countryside Manor in Ireland",
    description: "Elegant estate with rolling green hills.",
    image: {
      path: "https://images.unsplash.com/photo-1559589689-577aabd1c130?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1559589689-577aabd1c130"
    },
    price: 105000,
    location: "County Clare",
    country: "Ireland"
  }, {
    title: "Cozy Apartment in Downtown Delhi",
    description: "A comfortable and modern apartment located in the heart of Delhi, close to major attractions and public transport.",
    image: {
      path: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1501183638710-841dd1904471"
    },
    price: 45000,
    location: "Connaught Place, Delhi",
    country: "India"
  },
  {
    title: "Spacious Villa with Garden",
    description: "A luxurious villa featuring a private garden and swimming pool, perfect for family gatherings.",
    image: {
      path: "https://images.unsplash.com/photo-1588075147961-e0e9670e98aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
      filename: "photo-1588075147961-e0e9670e98aa"
    },
    price: 120000,
    location: "Beverly Hills, California",
    country: "USA"
  },
  {
    title: "Modern Studio Apartment",
    description: "A sleek and stylish studio apartment located in a vibrant neighborhood.",
    image: {
      path: "https://images.unsplash.com/photo-1598928506312-0c15f7c7e9d1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1598928506312-0c15f7c7e9d1"
    },
    price: 30000,
    location: "Shinjuku, Tokyo",
    country: "Japan"
  },
  {
    title: "Beachfront Bungalow",
    description: "A charming bungalow located right on the beach, offering stunning sea views.",
    image: {
      path: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1506748686214-e9df14d4d9d0"
    },
    price: 80000,
    location: "Bondi Beach, Sydney",
    country: "Australia"
  },
  {
    title: "Mountain Cabin Retreat",
    description: "A cozy cabin nestled in the mountains, ideal for a peaceful getaway.",
    image: {
      path: "https://images.unsplash.com/photo-1508856699-438d6551d9c1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1508856699-438d6551d9c1"
    },
    price: 60000,
    location: "Aspen, Colorado",
    country: "USA"
  },
  {
    title: "Historic City Center Apartment",
    description: "An apartment located in the historic center, surrounded by cultural landmarks.",
    image: {
      path: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1522708323590-d24dbb6b0267"
    },
    price: 55000,
    location: "Florence",
    country: "Italy"
  },
  {
    title: "Penthouse with Skyline View",
    description: "A luxurious penthouse offering panoramic views of the city skyline.",
    image: {
      path: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1600585154340-be6161a56a0c"
    },
    price: 150000,
    location: "Manhattan, New York",
    country: "USA"
  },
  {
    title: "Countryside Cottage",
    description: "A quaint cottage located in the serene countryside, perfect for relaxation.",
    image: {
      path: "https://images.unsplash.com/photo-1472220625704-91e1462799b2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1472220625704-91e1462799b2"
    },
    price: 40000,
    location: "Cotswolds",
    country: "UK"
  },
  {
    title: "Urban Loft",
    description: "A trendy loft located in the heart of the city, close to nightlife and entertainment.",
    image: {
      path: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1519710164239-da123dc03ef4"
    },
    price: 70000,
    location: "Berlin",
    country: "Germany"
  },
  {
    title: "Lake House with Private Dock",
    description: "A beautiful lake house featuring a private dock and stunning water views.",
    image: {
      path: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1505691938895-1758d7feb511"
    },
    price: 90000,
    location: "Lake Tahoe, California",
    country: "USA"
  },
  {
    title: "Desert Oasis Villa",
    description: "A luxurious villa located in the desert, offering a unique oasis experience.",
    image: {
      path: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1501594907352-04cda38ebc29"
    },
    price: 110000,
    location: "Dubai",
    country: "UAE"
  },
  {
    title: "Suburban Family Home",
    description: "A spacious home located in a family-friendly suburb, close to schools and parks.",
    image: {
      path: "https://images.unsplash.com/photo-1560185007-5a2f8bee03a9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1560185007-5a2f8bee03a9"
    },
    price: 50000,
    location: "Plano, Texas",
    country: "USA"
  },
  {
    title: "Charming Bed and Breakfast",
    description: "A cozy bed and breakfast offering a homey atmosphere and delicious breakfasts.",
    image: {
      path: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1512917774080-9991f1c4c750"
    },
    price: 65000,
    location: "Savannah, Georgia",
    country: "USA"
  },
  {
    title: "Luxury Penthouse in Mumbai",
    description: "An exquisite penthouse offering panoramic city views, modern amenities, and spacious living areas.",
    image: {
      path: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1600585154340-be6161a56a0c"
    },
    price: 200000,
    location: "Marine Drive, Mumbai",
    country: "India"
  },
  {
    title: "Rustic Farmhouse in Tuscany",
    description: "A charming farmhouse surrounded by rolling hills and vineyards, perfect for a tranquil retreat.",
    image: {
      path: "https://images.unsplash.com/photo-1472220625704-91e1462799b2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1472220625704-91e1462799b2"
    },
    price: 75000,
    location: "Tuscany",
    country: "Italy"
  },
  {
    title: "Modern Loft in Berlin",
    description: "A stylish loft located in the heart of Berlin, featuring contemporary design and close proximity to cultural hotspots.",
    image: {
      path: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1519710164239-da123dc03ef4"
    },
    price: 85000,
    location: "Mitte, Berlin",
    country: "Germany"
  },
  {
    title: "Secluded Cabin in the Woods",
    description: "A peaceful cabin nestled in the forest, ideal for nature lovers seeking solitude.",
    image: {
      path: "https://images.unsplash.com/photo-1508856699-438d6551d9c1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1508856699-438d6551d9c1"
    },
    price: 50000,
    location: "Smoky Mountains, Tennessee",
    country: "USA"
  }, {
    title: "Cozy Apartment in Downtown Delhi",
    description: "A comfortable and modern apartment located in the heart of Delhi, close to major attractions and public transport.",
    image: {
      path: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1501183638710-841dd1904471"
    },
    price: 45000,
    location: "Connaught Place, Delhi",
    country: "India"
  },
  {
    title: "Spacious Villa with Garden",
    description: "A luxurious villa featuring a private garden and swimming pool, perfect for family gatherings.",
    image: {
      path: "https://images.unsplash.com/photo-1588075147961-e0e9670e98aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
      filename: "photo-1588075147961-e0e9670e98aa"
    },
    price: 120000,
    location: "Beverly Hills, California",
    country: "USA"
  },
  {
    title: "Modern Studio Apartment",
    description: "A sleek and stylish studio apartment located in a vibrant neighborhood.",
    image: {
      path: "https://images.unsplash.com/photo-1598928506312-0c15f7c7e9d1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1598928506312-0c15f7c7e9d1"
    },
    price: 30000,
    location: "Shinjuku, Tokyo",
    country: "Japan"
  },
  {
    title: "Beachfront Bungalow",
    description: "A charming bungalow located right on the beach, offering stunning sea views.",
    image: {
      path: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1506748686214-e9df14d4d9d0"
    },
    price: 80000,
    location: "Bondi Beach, Sydney",
    country: "Australia"
  },
  {
    title: "Mountain Cabin Retreat",
    description: "A cozy cabin nestled in the mountains, ideal for a peaceful getaway.",
    image: {
      path: "https://images.unsplash.com/photo-1508856699-438d6551d9c1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1508856699-438d6551d9c1"
    },
    price: 60000,
    location: "Aspen, Colorado",
    country: "USA"
  },
  {
    title: "Luxury Penthouse Suite",
    description: "Experience the height of luxury in this modern penthouse with breathtaking city views.",
    image: {
      path: "https://images.unsplash.com/photo-1572120360610-d971b9b78857?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1572120360610-d971b9b78857"
    },
    price: 200000,
    location: "Manhattan, New York",
    country: "USA"
  },
  {
    title: "Rustic Country Home",
    description: "A beautiful rustic home surrounded by nature, perfect for a quiet lifestyle.",
    image: {
      path: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1564013799919-ab600027ffc6"
    },
    price: 55000,
    location: "Tuscany",
    country: "Italy"
  },
  {
    title: "Traditional Rajasthani Haveli",
    description: "A majestic haveli offering a royal experience with traditional architecture.",
    image: {
      path: "https://images.unsplash.com/photo-1606011164382-c942f1ea69ae?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1606011164382-c942f1ea69ae"
    },
    price: 95000,
    location: "Udaipur, Rajasthan",
    country: "India"
  },
  {
    title: "Tropical Villa in Bali",
    description: "Private pool villa surrounded by lush jungle.",
    image: {
      path: "https://images.unsplash.com/photo-1600585153881-3e4ce469cdbb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1600585153881-3e4ce469cdbb"
    },
    price: 88000,
    location: "Ubud",
    country: "Indonesia"
  },
  {
    title: "Beach House in Australia",
    description: "Sunny getaway with direct beach access.",
    image: {
      path: "https://images.unsplash.com/photo-1559599189-940b9f8987b8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1559599189-940b9f8987b8"
    },
    price: 96000,
    location: "Byron Bay",
    country: "Australia"
  },
  {
    title: "Rustic Barn in Tuscany",
    description: "Charming countryside home among vineyards.",
    image: {
      path: "https://images.unsplash.com/photo-1600592681940-01900a9ed6fd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1600592681940-01900a9ed6fd"
    },
    price: 74000,
    location: "Chianti",
    country: "Italy"
  },
  {
    title: "Downtown Loft in NYC",
    description: "Stylish apartment in the heart of Manhattan.",
    image: {
      path: "https://images.unsplash.com/photo-1559599101-9674ee00b4d4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1559599101-9674ee00b4d4"
    },
    price: 150000,
    location: "Manhattan, New York",
    country: "USA"
  },
  {
    title: "Cave Home in Cappadocia",
    description: "Unique stone-carved home with ancient charm.",
    image: {
      path: "https://images.unsplash.com/photo-1586706583066-4fd2aef3f8b6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1586706583066-4fd2aef3f8b6"
    },
    price: 65000,
    location: "Göreme",
    country: "Turkey"
  },
  {
    title: "Lakeside Cabin in Finland",
    description: "Peaceful retreat on a frozen lakefront.",
    image: {
      path: "https://images.unsplash.com/photo-1587502537085-6c1d2e61f5bb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1587502537085-6c1d2e61f5bb"
    },
    price: 69000,
    location: "Lapland",
    country: "Finland"
  },
  {
    title: "Snowy Cottage in Switzerland",
    description: "Alpine-style home with cozy interiors and a fireplace.",
    image: {
      path: "https://images.unsplash.com/photo-1542621334-9e5ec0c759f3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1542621334-9e5ec0c759f3"
    },
    price: 99000,
    location: "Zermatt",
    country: "Switzerland"
  },
  {
    title: "Desert Home in Arizona",
    description: "Modern adobe-style home with views of red rocks.",
    image: {
      path: "https://images.unsplash.com/photo-1600585154138-b9caa3b6f5ae?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1600585154138-b9caa3b6f5ae"
    },
    price: 71000,
    location: "Sedona",
    country: "USA"
  },
  {
    title: "Ski Chalet in France",
    description: "Warm, wooden lodge near the slopes.",
    image: {
      path: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1542314831-068cd1dbfeeb"
    },
    price: 89000,
    location: "Chamonix",
    country: "France"
  },
  {
    title: "Eco-Dome in Chile",
    description: "Futuristic dome living in Patagonia’s wilderness.",
    image: {
      path: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1556761175-4b46a572b786"
    },
    price: 67000,
    location: "Torres del Paine",
    country: "Chile"
  },
  {
    title: "Hillside Home in Nepal",
    description: "Simple home with stunning Himalayan views.",
    image: {
      path: "https://images.unsplash.com/photo-1601197982512-49eede6c8693?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1601197982512-49eede6c8693"
    },
    price: 53000,
    location: "Pokhara",
    country: "Nepal"
  },
  {
    title: "Mountain House in Colorado",
    description: "Modern lodge with snowy peaks all around.",
    image: {
      path: "https://images.unsplash.com/photo-1600585153929-3d1ec92fefaa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1600585153929-3d1ec92fefaa"
    },
    price: 94000,
    location: "Aspen",
    country: "USA"
  },
  {
    title: "Island Bungalow in Philippines",
    description: "Stilted bungalow over crystal-clear waters.",
    image: {
      path: "https://images.unsplash.com/photo-1614057453608-5b923dc4115f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1614057453608-5b923dc4115f"
    },
    price: 69000,
    location: "Palawan",
    country: "Philippines"
  },
  {
    title: "Hilltop Villa in Brazil",
    description: "Secluded modern home with rainforest views.",
    image: {
      path: "https://images.unsplash.com/photo-1590080876664-bdf4e0f3ad3f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1590080876664-bdf4e0f3ad3f"
    },
    price: 83000,
    location: "Paraty",
    country: "Brazil"
  },
  {
    title: "Woodland House in Japan",
    description: "Minimalist architecture in a serene forest.",
    image: {
      path: "https://images.unsplash.com/photo-1598928506311-3d67a86b8d36?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      filename: "photo-1598928506311-3d67a86b8d36"
    },
    price: 78000,
    location: "Nagano",
    country: "Japan"
  },
];

module.exports = { data: sampleListings };