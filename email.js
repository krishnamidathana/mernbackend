import nodemailer  from 'nodemailer'
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config() ;


// Create a nodemailer transporter with Gmail service
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Use the email user from environment variables
    pass: process.env.EMAIL_PASS // Use the email password from environment variables
  }
});

// Export the transporter to be used for sending emails
export default transporter