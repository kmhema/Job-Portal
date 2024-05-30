import app  from  "./app.js";

import cloudinary from "cloudinary";
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
    api_key: process.env.CLOUDINARY_CLIENT_API,
    api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Example route to set a cookie
app.post('/set-cookie', (req, res) => {
    const { token } = req.body;

    // Set a cookie
    res.cookie('token', token, {
        httpOnly: true,
        secure: false, // Set to true in production with HTTPS
        maxAge: 3600000 // 1 hour in milliseconds
    }); 
    // Send response
    res.status(200).json({
        success: true,
        message: 'Cookie set successfully'
    });
});


app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`);
});