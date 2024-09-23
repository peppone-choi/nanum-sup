
const userRepository = require('./user.repository');

async function createUser(userData) {
    return await userRepository.create(userData);
}

async function getUserById(id) {
    return await userRepository.findById(id);
}

async function updateUser(id, userData) {
    return await userRepository.update(id, userData);
}

async function deleteUser(id) {
    return await userRepository.remove(id);
}

async function getAllUsers() {
    return await userRepository.findAll();
}

module.exports = {
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    getAllUsers,
};
