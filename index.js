require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const usersFromDB = [
    { username: "abc", password: "abc" },
    { username: "xyz", password: "xyz" },
  ];

  if (!username || !password) {
    res.render("login", { error: "username and password must be provided" });
    return;
  }

  const foundUser = usersFromDB.find((e) => e.username === username);

  if (!foundUser) {
    res.render("login", { error: "user is not found" });
    return;
  }

  if (foundUser.password !== password) {
    res.status(401).render("login", { error: "wrong password" });
    return;
  }

  res.redirect("/dashboard");
});

app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

app.listen(process.env.PORT, () => {
  console.info(`App is running on port: ${process.env.PORT}`);
});
