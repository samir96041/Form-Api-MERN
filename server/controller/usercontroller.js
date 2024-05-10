// UserController.js

const User = require('../model/usermodel'); // Assuming your model file is in a 'models' directory

const registerUser = async (req, res) => {
    try {
        const { name, mobile, address, email, dob } = req.body;
        const newUser = new User({
            name,
            mobile,
            address,
            email,
            dob
        });

        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to fetch all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "error" });
    }
};

module.exports = { registerUser, getAllUsers };
