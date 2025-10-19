const bcrypt = require('bcrypt');
const saltRounds = 10;

// Function to hash a password
const hashPassword = async (password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (err) {
        throw new Error('Error hashing password');
    }
};

// Function to compare password
const comparePassword = async (plainPassword, hashedPassword) => {
    try {
        return await bcrypt.compare(plainPassword, hashedPassword);
    } catch (err) {
        throw new Error('Error comparing passwords');
    }
};

module.exports = { hashPassword, comparePassword };
