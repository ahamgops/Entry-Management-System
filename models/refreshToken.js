const mongoose = require('mongoose');

const refreshTokenSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        match: [/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, "Email is not valid."],
        required: true
    },

    token: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("refreshToken", refreshTokenSchema);