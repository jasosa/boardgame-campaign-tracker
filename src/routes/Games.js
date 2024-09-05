const express = require('express');
const router = express.Router();
const Game = require('../models/Game');

// Create a new game
router.post('/', async (req, res) => {
    try {
      const game = new Game(req.body);
      await game.save();
      res.status(201).send(game);
    } catch (err) {
      res.status(400).send(err.message);
    }
  });

  // Get all games
router.get('/', async (req, res) => {
    try {
      const games = await Game.find();
      res.status(200).send(games);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

  // Get a game by ID
router.get('/:id', async (req, res) => {
    try {
      const game = await Game.findById(req.params.id);
      if (!game) return res.status(404).send('Game not found');
      res.status(200).send(game);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });


  // Update a game by ID
router.put('/:id', async (req, res) => {
    try {
      const game = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!game) return res.status(404).send('Game not found');
      res.status(200).send(game);
    } catch (err) {
      res.status(400).send(err.message);
    }
  });

  // Delete a game by ID
router.delete('/:id', async (req, res) => {
    try {
      const game = await Game.findByIdAndDelete(req.params.id);
      if (!game) return res.status(404).send('Game not found');
      res.status(200).send(game);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

  module.exports = router;