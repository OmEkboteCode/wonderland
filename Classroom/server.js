const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const cookieParser = require("cookie-parser");

app.use(cookieParser("secretcode"));

app.get("/getsignedcookie", (req, res) => {
  res.cookie("color", "Black", { signed: true });
  res.send("signed cookie sent");
});

app.get("/verify", (req, res) => {
  console.log(req.signedCookies);
  res.send("Verified")
});

app.get("/getcookies", (req, res) => {
  res.cookie("great", "hello");
  res.cookie("origin", "us");
  res.send("We Send You a Cookie!");
});

app.get("/greet", (req, res) => {
  let { name = "anonymous" } = req.cookies;
  res.send(`Hi, ${name}!`);
});

app.get("/", (req, res) => {
  console.dir(req.cookies);
  res.send("Hi, I am Root!");
});

app.use("/users", users);
app.use("/posts", posts);

app.listen(4000, () => {
  console.log("Sever is listening to 4000");
});
