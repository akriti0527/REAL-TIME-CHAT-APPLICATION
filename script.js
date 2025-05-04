// Establish a WebSocket connection to the server
const socket = new WebSocket('ws://' + window.location.host);

// DOM elements
const chatBox = document.getElementById('chat-box');
const sendBtn = document.getElementById('sendBtn');
const messageInput = document.getElementById('messageInput');

// Send message when the 'Send' button is clicked
sendBtn.addEventListener('click', () => {
    const message = messageInput.value;
    if (message.trim() !== '') {
        socket.send(message);
        messageInput.value = '';
    }
});

// Display incoming messages
socket.onmessage = function (event) {
    const messageElement = document.createElement('div');
    messageElement.textContent = event.data;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the latest message
};
