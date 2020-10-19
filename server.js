const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  database: "registration",
  user: "root",
  password: "secret"
});

app.post("/register", function(req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const password = req.body.password;

  const user = {
    name: name,
    email: email,
    phone: phone,
    password: password,
  };

  connection.query("INSERT INTO users SET ?", user);

  return res.redirect("success.html");
});

app
  .get("/", function(req, res) {
    return res.redirect("index.html");
  })
  .listen(3000);

console.log("server listening at port 3000");
