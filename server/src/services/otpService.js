const nodemailer = require('nodemailer');
const twilio = require('twilio');
const { generateOTP, storeOTP, verifyOTP } = require('../utils/otpUtil'); // Import OTP utilities

const client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

// Function to send OTP
const sendOTP = async (recipient) => {
    const otp = generateOTP(); // Generate OTP
    const { otp: storedOTP, expirationTime } = storeOTP(recipient.email, otp); // Store OTP logic

    try {
        // Send OTP via email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: recipient.email,
            subject: 'Your OTP Code',
            text: `Your OTP code is ${storedOTP}`
        };

        await transporter.sendMail(mailOptions);

        // Send OTP via SMS
        await client.messages.create({
            body: `Your OTP code is ${storedOTP}`,
            from: process.env.TWILIO_PHONE, // Your Twilio phone number
            to: recipient.phoneNumber
        });

        // Send OTP via WhatsApp
        await client.messages.create({
            body: `Your OTP code is ${storedOTP}`,
            from: `whatsapp:${process.env.TWILIO_WHATSAPP_PHONE}`, // Your Twilio WhatsApp number
            to: `whatsapp:${recipient.whatsapp}` // User's WhatsApp number
        });

        console.log('OTP sent via Email, SMS, and WhatsApp');
        
        return { storedOTP, expirationTime }; // Return stored OTP and its expiration
    } catch (error) {
        console.error('Error sending OTP:', error);
    }
};

// Function to validate OTP
const validateOTP = (inputOTP, storedOTP, expirationTime) => {
    return verifyOTP(inputOTP, storedOTP, expirationTime); // Verify OTP using utility
};

// Function to notify user of account creation
const notifyAccountCreation = async (recipient) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const message = `Dear ${recipient.firstName},\n\nYour account has been created successfully! Thank you for joining us. If you have any questions, feel free to reach out.\n\nBest Regards,\nYour Company Name`;

        // Send notification via email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: recipient.email,
            subject: 'Account Created Successfully',
            text: message
        };

        await transporter.sendMail(mailOptions);

        // Send notification via SMS
        await client.messages.create({
            body: message,
            from: process.env.TWILIO_PHONE, // Your Twilio phone number
            to: recipient.phoneNumber
        });

        // Send notification via WhatsApp
        await client.messages.create({
            body: message,
            from: `whatsapp:${process.env.TWILIO_WHATSAPP_PHONE}`, // Your Twilio WhatsApp number
            to: `whatsapp:${recipient.whatsapp}` // User's WhatsApp number
        });

        console.log('Account creation notification sent via Email, SMS, and WhatsApp');
    } catch (error) {
        console.error('Error sending account creation notification:', error);
    }
};

module.exports = { sendOTP, validateOTP, notifyAccountCreation };
