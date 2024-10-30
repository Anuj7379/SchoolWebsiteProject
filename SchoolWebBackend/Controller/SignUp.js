import User from '../Model/adminInfo.js';

import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

// Utility function to generate a 6-digit OTP
const generateOtp = () => Math.floor(100000 + Math.random() * 900000);

// Utility function to send OTP using Twilio
const sendOtpToPhone = async (phoneNumber, otp) => {
    try {
        await twilioClient.messages.create({
            body: `Your OTP is ${otp}`,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: phoneNumber,
        });
        console.log(`OTP sent to ${phoneNumber}`);
    } catch (error) {
        console.error("Failed to send OTP:", error);
        throw error;
    }
};

// Signup controller
export const signUp = async (req, res) => {
    const { name, phoneNumber, password } = req.body;

    try {
        const existingUser = await User.findOne({ phoneNumber });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        const user = new User({ name, phoneNumber, password });
        await user.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error registering user", error });
    }
};

// Send OTP to user's phone number
export const sendOtp = async (req, res) => {
    const { phoneNumber } = req.body;

    try {
        const otp = generateOtp();
        const user = await User.findOne({ phoneNumber });
        if (!user) return res.status(404).json({ message: "User not found" });

        user.otp = otp;
        user.otpExpiry = new Date(Date.now() + 10 * 60000); // Expire in 10 minutes
        await user.save();

        await sendOtpToPhone(phoneNumber, otp);

        res.status(200).json({ message: "OTP sent successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to send OTP", error });
    }
};

// Verify OTP for login
export const verifyOtp = async (req, res) => {
    const { phoneNumber, otp } = req.body;

    try {
        const user = await User.findOne({ phoneNumber });
        if (!user) return res.status(404).json({ message: "User not found" });

        if (user.otp !== otp || user.otpExpiry < Date.now()) {
            return res.status(400).json({ message: "Invalid or expired OTP" });
        }

        // Clear OTP after successful verification
        user.otp = null;
        user.otpExpiry = null;
        await user.save();

        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        res.status(500).json({ message: "Error verifying OTP", error });
    }
};
