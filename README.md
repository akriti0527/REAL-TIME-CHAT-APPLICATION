# REAL-TIME-CHAT-APPLICATION
BUILT A REAL-TIME CHAT APPLICATION USING WEBSOCKETSAND A FRONT-END FRAMEWORK LIKEVUE.JS OR REACT.JS.

*COMPANY*: CODETECH IT SOLUTIONS
*NAME*: AKRITI SHARMA
*INTERN* ID: CT04DK515 
*DOMAIN*: FRONT END DEVELOPMENT
*DURATION*: 4 WEEKS
*MENTOR* : NEELA SANTHOSH

This project is a simple real-time chat application built using HTML, CSS, JavaScript, and a Node.js WebSocket server. It enables multiple users to communicate instantly in a browser without page reloads. The backend server uses the ws (WebSocket) library and Express.js to manage both WebSocket connections and static file delivery. When the server starts, it serves the frontend files from the public directory and listens for WebSocket connections on port 3000.

The WebSocket server (server.js) tracks all connected clients. When a user sends a message, the server broadcasts that message to all other connected clients in real-time. This is achieved using the WebSocket.Server object and listening for message and close events to handle chat input and disconnections.

The frontend consists of three main files: index.html, style.css, and script.js. The HTML sets up the layout of the chat interface, including a message box, input field, and send button. The CSS styles the interface for a clean and modern look. The JavaScript (script.js) handles WebSocket communication from the client side: it connects to the server, sends messages, and appends incoming messages to the chat box.

When run, users can open the app in multiple browser windows or devices and see messages appear in real time, demonstrating a basic but functional real-time communication system. This project can be a foundation for more complex applications like chat rooms, live support, or multiplayer games.

##OUTPUT
