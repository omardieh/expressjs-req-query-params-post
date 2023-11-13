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

const usersFromDB = [
  {
    id: 1,
    name: "Alice",
    books: [
      { title: "The Catcher in the Rye", author: "J.D. Salinger" },
      { title: "To Kill a Mockingbird", author: "Harper Lee" },
    ],
  },
  {
    id: 2,
    name: "Bob",
    books: [
      { title: "1984", author: "George Orwell" },
      { title: "Brave New World", author: "Aldous Huxley" },
    ],
  },
  {
    id: 3,
    name: "Charlie",
    books: [
      { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
      { title: "Pride and Prejudice", author: "Jane Austen" },
    ],
  },
  {
    id: 4,
    name: "David",
    books: [
      { title: "The Hobbit", author: "J.R.R. Tolkien" },
      { title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
    ],
  },
  {
    id: 5,
    name: "Emma",
    books: [
      {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
      },
      {
        title: "Harry Potter and the Chamber of Secrets",
        author: "J.K. Rowling",
      },
    ],
  },
  {
    id: 6,
    name: "Frank",
    books: [
      { title: "The Shining", author: "Stephen King" },
      { title: "It", author: "Stephen King" },
    ],
  },
  {
    id: 7,
    name: "Grace",
    books: [
      { title: "The Da Vinci Code", author: "Dan Brown" },
      { title: "Angels & Demons", author: "Dan Brown" },
    ],
  },
  {
    id: 8,
    name: "Henry",
    books: [
      { title: "The Hunger Games", author: "Suzanne Collins" },
      { title: "Catching Fire", author: "Suzanne Collins" },
    ],
  },
  {
    id: 9,
    name: "Ivy",
    books: [
      { title: "The Alchemist", author: "Paulo Coelho" },
      { title: "The Little Prince", author: "Antoine de Saint-Exupéry" },
    ],
  },
  {
    id: 10,
    name: "Jack",
    books: [
      { title: "Moby-Dick", author: "Herman Melville" },
      { title: "The Odyssey", author: "Homer" },
    ],
  },
];

app.get("/users", (req, res) => {
  const { limit } = req.query;
  res.json(usersFromDB.slice(0, limit));
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const foundUser = usersFromDB.find((e) => e.id === +id);
  res.json(foundUser);
});

app.get("/users/:id/books", (req, res) => {
  const { id } = req.params;
  const foundUser = usersFromDB.find((e) => e.id === +id);
  res.json(foundUser.books);
});

// app.get("/users/:username/books/:bookId", (req, res, next) => {
//   res.send(req.params);
// });

app.listen(process.env.PORT, () => {
  console.info(`App is running on port: ${process.env.PORT}`);
});
