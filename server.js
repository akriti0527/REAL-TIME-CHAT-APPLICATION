// Import required modules
const WebSocket = require('ws');
const express = require('express');
const http = require('http');
const path = require('path');

// Initialize Express app and HTTP server
const app = express();
const server = http.createServer(app);

// Set up WebSocket server
const wss = new WebSocket.Server({ server });

// Array to store connected clients
let clients = [];

// Handle new WebSocket connections
wss.on('connection', (ws) => {
    // Add new client to the clients array
    clients.push(ws);

    // Broadcast incoming messages to all clients
    ws.on('message', (message) => {
        clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    // Remove client from clients array when disconnected
    ws.on('close', () => {
        clients = clients.filter((client) => client !== ws);
    });
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
