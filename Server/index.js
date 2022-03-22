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
  const { name, email, phone } = req.body;

  const sqlInsert =
    "INSERT INTO table1 (username, email, phone) VALUES (?, ?, ?)";
  db.query(sqlInsert, [name, email, phone], (err, result) => {
    if (err) {
      console.log(err);
    }
  });
});

app.delete("/api/remove/:id", (req, res) => {
  const { id } = req.params;
  //console.log(req.params);
  const sqlRemove = "DELETE FROM table1 WHERE userid = ?";
  db.query(sqlRemove, id, (err, result) => {
    if (err) {
      console.log(err);
    }
  });
});

app.get("/api/get/:id", (req, res) => {
  const { id } = req.params;
  const sglGet = "SELECT * FROM table1 WHERE userid = ?";
  db.query(sglGet, id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.put("/api/update/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;
  const sglUpdate =
    "UPDATE table1 SET name = ?, email = ?, phone = ? WHERE userid = ?";
  db.query(sglUpdate, [name, email, phone, id], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
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
