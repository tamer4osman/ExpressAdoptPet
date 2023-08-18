const express = require("express");
const router = express.Router();
const pets = require("../petList"); // Import the pet data

router.get("/:type", (req, res) => {
  const { type } = req.params;
  const petType = pets[type];

  if (!petType) {
    return res.status(404).send("Pet type not found");
  }

  res.render("pets", { title: `Available ${type}`, petType });
});

module.exports = router;