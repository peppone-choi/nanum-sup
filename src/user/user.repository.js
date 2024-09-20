
const User = require('./user.model');

async function create(userData) {
    const user = new User(userData);
    return await user.save();
}

async function findById(id) {
    return await User.findById(id);
}

async function update(id, userData) {
    return await User.findByIdAndUpdate(id, userData, { new: true });
}

async function remove(id) {
    return await User.findByIdAndDelete(id);
}

async function findAll() {
    return await User.find();
}

module.exports = {
    create,
    findById,
    update,
    remove,
    findAll,
};
