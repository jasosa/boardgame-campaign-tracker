const express = require('express');
const router = express.Router();
const Campaign = require('../models/Campaign');

// Create a new campaign
router.post('/', async (req, res) => {
  try {
    const campaign = new Campaign(req.body);
    await campaign.save();
    res.status(201).send(campaign);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Get all campaigns
router.get('/', async (req, res) => {
  try {
    const campaigns = await Campaign.find().populate('game_id');
    res.status(200).send(campaigns);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Get a campaign by ID
router.get('/:id', async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id).populate('game_id');
    if (!campaign) return res.status(404).send('Campaign not found');
    res.status(200).send(campaign);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Update a campaign by ID
router.put('/:id', async (req, res) => {
  try {
    const campaign = await Campaign.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('game_id');
    if (!campaign) return res.status(404).send('Campaign not found');
    res.status(200).send(campaign);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Delete a campaign by ID
router.delete('/:id', async (req, res) => {
  try {
    const campaign = await Campaign.findByIdAndDelete(req.params.id);
    if (!campaign) return res.status(404).send('Campaign not found');
    res.status(200).send(campaign);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
