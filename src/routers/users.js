// routes/users.js
const express = require('express');
const User = require('../models/User');
const router = express.Router();

// 회원가입
router.post('/', (req, res) => {
    const { username, email } = req.body;
    const newUser = new User(username, email);
    User.addUser(newUser);
    res.status(201).json(newUser);
});

// 회원 정보 조회
router.get('/:id', (req, res) => {
    const user = User.getUserById(parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found');
    res.json(user);
});

// 회원 정보 수정
router.put('/:id', (req, res) => {
    const user = User.updateUser(parseInt(req.params.id), req.body);
    if (!user) return res.status(404).send('User not found');
    res.json(user);
});

// 회원 삭제
router.delete('/:id', (req, res) => {
    const user = User.deleteUser(parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found');
    res.status(204).send();
});

// 모든 회원 목록 조회
router.get('/', (req, res) => {
    res.json(User.getAllUsers());
});

module.exports = router;
