// routes/userRoutes.js
import express from 'express';
import { signUp, sendOtp, verifyOtp } from '../Controller/SignUp.js';

const router = express.Router();

router.post('/signup', signUp);
router.post('/send-otp', sendOtp);
router.post('/verify-otp', verifyOtp);

export default router;
