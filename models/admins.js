const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        min: [3, "Name Should have at least 3 characters."],
        max: [30, "Name should have at max 30 characters."],
        required: true
    },

    phone: {
        type: Number,
        required: true,
        unique: true,
        match: [/^\d{10}$/, "Phone number is not valid."]
    },

    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, "Email is not valid."]
    },

    password: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true,
        trim: true,
        min: [5, "Address is too short (Should have at least 5 characters)."]
    }

}, { timestamps: true });

module.exports = mongoose.model("Admin", adminSchema);