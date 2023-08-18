const express = require("express");
const app = express();
const dotenv = require("dotenv");
const pets = require("./petList");

dotenv.config();
app.set("view engine", "ejs");

const port = process.env.PORT || 3000;

// Homepage route
app.get("/", (req, res) => {
  res.render("index", { title: "Pet Adoption Homepage" });
});

// List pets of a given type
app.get("/pets/:type", (req, res) => {
  const { type } = req.params;
  const petType = pets[type]; // Retrieve pets of the specified type

  if (!petType) {
    return res.status(404).send("Pet type not found");
  }

  res.render("pets", { title: `Available ${type}`, petType });
});

// Display individual pet profile
app.get("/pet/:type/:index", (req, res) => {
  const { type, index } = req.params;
  const petType = pets[type];

  if (!petType || !petType[index]) {
    return res.status(404).send("Pet not found");
  }

  const pet = petType[index];
  res.render("profile", { title: `${pet.name}'s Profile`, pet });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
