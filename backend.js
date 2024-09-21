const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON and urlencoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for handling form submissions
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Message received from ${name}, Email: ${email}, Message: ${message}`);
    // Handle form submission logic here (e.g., save to database, send email)
    res.send('Form submitted successfully!');
});

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Example API endpoint
app.get('/api/data', (req, res) => {
    const data = {
        message: 'This is a sample API response',
        timestamp: new Date()
    };
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
