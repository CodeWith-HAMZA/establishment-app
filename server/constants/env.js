const API_SECRET = 'LKIM3KK3CVTpBsi0sbVnssUSbG4'; // process.env.API_SECRET
const CLOUDINARY_URL = 'cloudinary://341524724215744:LKIM3KK3CVTpBsi0sbVnssUSbG4@dytjaaxbv';
const API_KEY = '341524724215744';
// constants will be comming from .env file
const PORT = process.env.PORT || 7000
const DATABASE_URL = process.env.DATABASE_URL;
const SECRET_KEY = process.env.SECRET_KEY;
const SMTP_MAIL_SENDER_EMAIL = process.env.SMTP_MAIL_SENDER_EMAIL
const JWT_SECRET = process.env.JWT_SECRET




module.exports = { API_SECRET, SMTP_MAIL_SENDER_EMAIL, CLOUDINARY_URL, API_KEY, PORT, DATABASE_URL, SECRET_KEY, JWT_SECRET };