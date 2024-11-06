// server.js

// Load environment variables from the .env file
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Import the API routes from the Routes folder
const apiRoutes = require(path.join(__dirname, '../Routes/APIroutes'));

const app = express();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the Public directory
app.use(express.static(path.join(__dirname, '.')));

// Use the imported routes with '/api' prefix
app.use('/api', apiRoutes);

// Route for the main donation page
app.get('/donation', (req, res) => {
    res.sendFile(path.join(__dirname, 'donation.html'));
});

// Start the server on the specified port, or default to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
