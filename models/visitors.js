const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema({
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

    address: {
        type: String,
        required: true,
        trim: true,
        min: [5, "Address is too short (Should have at least 5 characters)."]
    },

    check_in_time: {
        type: String
    },

    check_out_time: {
        type: String,
        default: "Not checked out."
    },

    host_allotted: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Host"
    },

    checked_in: {
        type: Boolean,
        default: false
    }

}, { timestamps: true });

module.exports = mongoose.model("Visitor", visitorSchema);