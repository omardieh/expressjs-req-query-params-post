require("dotenv").config();
const express = require("express");
const app = express();

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

// req.query
app.get("/products", (req, res) => {
  // const price = req.query.price;
  // const limit = req.query.limit;
  const { price, limit } = req.query;
  console.log(price, limit);
  const products = [
    {
      id: 1,
      name: "Smartphone",
      price: 499.99,
      size: "Medium",
      image_url: "https://example.com/smartphone.jpg",
    },
    {
      id: 2,
      name: "Laptop",
      price: 899.99,
      size: "Large",
      image_url: "https://example.com/laptop.jpg",
    },
    {
      id: 3,
      name: "Wireless Headphones",
      price: 79.99,
      size: "One Size",
      image_url: "https://example.com/headphones.jpg",
    },
    {
      id: 4,
      name: "Smart Watch",
      price: 149.99,
      size: "Small",
      image_url: "https://example.com/smartwatch.jpg",
    },
    {
      id: 5,
      name: "Digital Camera",
      price: 399.99,
      size: "Medium",
      image_url: "https://example.com/camera.jpg",
    },
    {
      id: 6,
      name: "Fitness Tracker",
      price: 59.99,
      size: "Small",
      image_url: "https://example.com/fitnesstracker.jpg",
    },
    {
      id: 7,
      name: "Coffee Maker",
      price: 69.99,
      size: "Large",
      image_url: "https://example.com/coffeemaker.jpg",
    },
    {
      id: 8,
      name: "Gaming Console",
      price: 299.99,
      size: "Medium",
      image_url: "https://example.com/gamingconsole.jpg",
    },
    {
      id: 9,
      name: "Bluetooth Speaker",
      price: 49.99,
      size: "Small",
      image_url: "https://example.com/bluetoothspeaker.jpg",
    },
    {
      id: 10,
      name: "Tablet",
      price: 349.99,
      size: "Large",
      image_url: "https://example.com/tablet.jpg",
    },
  ];
  const filteredProducts = products.filter((e) => e.price <= +price);
  console.log(filteredProducts);
  res.send(filteredProducts.slice(0, limit));
});

// req.params
app.get("/products/:id", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Smartphone",
      price: 499.99,
      size: "Medium",
      image_url: "https://example.com/smartphone.jpg",
    },
    {
      id: 2,
      name: "Laptop",
      price: 899.99,
      size: "Large",
      image_url: "https://example.com/laptop.jpg",
    },
    {
      id: 3,
      name: "Wireless Headphones",
      price: 79.99,
      size: "One Size",
      image_url: "https://example.com/headphones.jpg",
    },
    {
      id: 4,
      name: "Smart Watch",
      price: 149.99,
      size: "Small",
      image_url: "https://example.com/smartwatch.jpg",
    },
    {
      id: 5,
      name: "Digital Camera",
      price: 399.99,
      size: "Medium",
      image_url: "https://example.com/camera.jpg",
    },
    {
      id: 6,
      name: "Fitness Tracker",
      price: 59.99,
      size: "Small",
      image_url: "https://example.com/fitnesstracker.jpg",
    },
    {
      id: 7,
      name: "Coffee Maker",
      price: 69.99,
      size: "Large",
      image_url: "https://example.com/coffeemaker.jpg",
    },
    {
      id: 8,
      name: "Gaming Console",
      price: 299.99,
      size: "Medium",
      image_url: "https://example.com/gamingconsole.jpg",
    },
    {
      id: 9,
      name: "Bluetooth Speaker",
      price: 49.99,
      size: "Small",
      image_url: "https://example.com/bluetoothspeaker.jpg",
    },
    {
      id: 10,
      name: "Tablet",
      price: 349.99,
      size: "Large",
      image_url: "https://example.com/tablet.jpg",
    },
  ];
  const foundProduct = products.find((e) => e.id === +req.params.id);
  res.json(foundProduct);
});

// app.get("/users/:username/books/:bookId", (req, res, next) => {
//   res.send(req.params);
// });

app.listen(process.env.PORT, () => {
  console.info(`App is running on port: ${process.env.PORT}`);
});
