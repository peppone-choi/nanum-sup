// routes/profiles.js
const express = require('express');
const router = express.Router();
const profiles = {};

// 프로필 조회
router.get('/:id', (req, res) => {
    const profile = profiles[req.params.id] || {};
    res.json(profile);
});

// 프로필 수정
router.put('/:id', (req, res) => {
    profiles[req.params.id] = req.body;
    res.json(profiles[req.params.id]);
});

module.exports = router;
