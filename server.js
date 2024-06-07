// server.js
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

let tickets = [];

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  // Validate user credentials
  res.send({ success: true });
});

app.post("/register", (req, res) => {
  const { email, password } = req.body;
  // Register the user
  res.send({ success: true });
});

app.post("/tickets", (req, res) => {
  const ticket = req.body;
  ticket.id = tickets.length + 1;
  tickets.push(ticket);
  res.send(ticket);
});

app.get("/tickets", (req, res) => {
  res.send(tickets);
});

app.get("/tickets/:id", (req, res) => {
  const ticket = tickets.find((t) => t.id === parseInt(req.params.id));
  res.send(ticket);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
