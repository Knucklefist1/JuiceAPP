// server.js

// Load environment variables from the .env file

const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the Public directory
app.use(express.static(path.join(__dirname, 'Src', 'Public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Src', 'Public', 'JuiceApp.html'));
});

// Start the server on the specified port, or default to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

