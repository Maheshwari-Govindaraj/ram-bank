const express = require('express');
const { sendOTP, notifyAccountCreation } = require('../services/otpService');
const router = express.Router();

// Route to send OTP
router.post('/send-otp', async (req, res) => {
    const { email, phoneNumber, whatsapp } = req.body;
    try {
        const recipient = { email, phoneNumber, whatsapp };
        const { storedOTP, expirationTime } = await sendOTP(recipient);
        res.status(200).json({ message: 'OTP sent successfully', storedOTP, expirationTime });
    } catch (error) {
        res.status(500).json({ message: 'Error sending OTP', error });
    }
});

// Route to notify account creation
router.post('/account-creation', async (req, res) => {
    const recipient = req.body; // assuming recipient contains the necessary user details
    try {
        await notifyAccountCreation(recipient);
        res.status(200).json({ message: 'Account creation notification sent' });
    } catch (error) {
        res.status(500).json({ message: 'Error sending account creation notification', error });
    }
});

module.exports = router;
