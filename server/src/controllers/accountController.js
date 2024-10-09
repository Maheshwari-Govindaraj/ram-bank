const Account = require('../models/accountModel');
const { sendOTP, notifyAccountCreation } = require('../services/otpService');

const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString(); // Generates a 6-digit OTP

exports.createAccount = async (req, res) => {
    const { firstName, lastName, email, phoneNumber, whatsapp, occupation, additionalDetails } = req.body;
    const otp = generateOTP(); // Generate 6-digit OTP

    try {
        // Save to MongoDB
        const account = new Account({
            firstName,
            lastName,
            email,
            phoneNumber,
            whatsapp, // Store WhatsApp number
            occupation,
            additionalDetails,
            documentUrls: req.file ? req.file.path : null,
            otp // Save OTP for verification
        });

        await account.save();
        
        // Use user details from account for sending OTP
        await sendOTP({ email, phoneNumber, whatsapp }, otp); // Send OTP

        // Notify the user of account creation
        await notifyAccountCreation({ firstName, email, phoneNumber, whatsapp });

        res.status(201).json({ message: 'Account created successfully, OTP sent, and notification dispatched.' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};
