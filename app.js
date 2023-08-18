const express = require("express");
const app = express();
const dotenv = require("dotenv");
const pets = require("./petList");

dotenv.config();
app.set("view engine", "ejs");

const port = process.env.PORT || 3000;

const indexRoute = require("./routes/index");
const petsRoute = require("./routes/pets");
const petRoute = require("./routes/pet");

// Homepage route
app.use("/", indexRoute);

// List pets of a given type
app.use("/pets", petsRoute);

// Display individual pet profile
app.use("/pet", petRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
