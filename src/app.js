// import express framework
const express = require('express');
// import path module to work with file paths
const path = require('path');
// create a new instance of the express application
const app = express();

app.use(express.static(path.join(__dirname, 'public')))

// route for url('/') of server, execute the function when visited
app.get('/', (req, res) => {
    //send a static html file to browser
    res.sendFile(path.join(__dirname, 'pages/index.html'));
});

// set the port the server will listen to
const port = process.env.PORT || 3000;

// start the server and listen for requests on the specified port
app.listen(port, () => {
    // log confirmation of server running to console.
    console.log(`Server running on https://localhost:${port}`);
});