const OTP_EXPIRY_TIME = 5 * 60 * 1000; // OTP valid for 5 minutes

// Generate a 6-digit OTP
const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); // Returns a string of 6 digits
};

// Store OTP with its expiration time
const storeOTP = (userId, otp) => {
    const expirationTime = Date.now() + OTP_EXPIRY_TIME;
    // Here you would typically save the OTP and expirationTime to the database associated with the userId
    return { otp, expirationTime };
};

// Verify OTP
const verifyOTP = (inputOTP, storedOTP, expirationTime) => {
    const isOTPValid = inputOTP === storedOTP && Date.now() < expirationTime;
    return isOTPValid; // Returns true if valid, false otherwise
};

module.exports = {
    generateOTP,
    storeOTP,
    verifyOTP
};
