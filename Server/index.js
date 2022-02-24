const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "sample_table",
});

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sglGet = "SELECT * FROM table1";
  db.query(sglGet, (err, result) => {
    res.send(result);
  });
});
app.post("/api/post", (req, res) => {
  const { username, email, phone } = req.body;
  const sqlInsert =
    "INSERT INTO table1 (username, email, phone) VALUES (?, ?, ?)";
  db.query(sqlInsert, [username, email, phone], (err, result) => {
    if (error) {
      console.log(err);
    }
  });
});

//app.get("/", (req, res) => {
// const sqlinsert =
//   "INSERT INTO table1 (username, email, phone) VALUES ('John2', 'john2@gmail.com', 7666666666)";
// db.query(sqlinsert, (err, result) => {
//   console.log("error", err);
//   console.log("result", result);
//   res.send("Hello Express");
// });
//});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
