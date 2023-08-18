const express = require('express');
const router = express.Router();
const pets = require('../petList'); // Import the pet data

router.get('/:type/:index', (req, res) => {
  const { type, index } = req.params;
  const petType = pets[type];

  if (!petType || !petType[index]) {
    return res.status(404).send('Pet not found');
  }

  const pet = petType[index];
  res.render('profile', { title: `${pet.name}'s Profile`, pet });
});

module.exports = router;
