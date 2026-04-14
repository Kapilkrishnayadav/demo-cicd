const express = require('express');
const app = express();
const PORT = 8000;

// Middleware to parse JSON bodies (essential for CRUD)
app.use(express.json());

// A basic "Home" route
app.get('/', (req, res) => {
    res.send('<h1>Server is Running!</h1>');
});

// An API route to test headers (useful for debugging Nginx)
app.get('/api/info', (req, res) => {
    res.json({
        message: "Hello from Express!",
        yourIp: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
        protocol: req.headers['x-forwarded-proto'] || 'http'
    });
});

app.listen(PORT, () => {
    console.log(`Express server is live at http://localhost:${PORT}`);
});
