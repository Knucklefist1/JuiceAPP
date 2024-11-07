// server.js

// Load environment variables from the .env file
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');

// Use CORS middleware to allow cross-origin requests
app.use(cors());

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the Public directory
app.use(express.static(path.join(__dirname, 'Public')));

// Route for the root of the website
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'juiceApp.html'));
});

// Additional route for the signup page
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'SignUp', 'signup.html'));
});

// Start the server on the specified port, or default to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));