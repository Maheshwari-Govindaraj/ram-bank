const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    whatsapp: { type: String, required: true },
    occupation: { type: String, required: true },
    additionalDetails: { type: Object, required: true }, // Store additional details as an object
    documentUrls: { type: String },
    otp: { type: String, required: true } // Store OTP for verification
}, { timestamps: true });

module.exports = mongoose.model('Account', accountSchema);
