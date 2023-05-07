// import express framework
const express = require('express');
// import path module to work with file paths
const path = require('path');
const mustacheExpress = require('mustache-express');
const PROJECTS = require('./projects');
const SKILLS = require('./skills');



// create a new instance of the express application
const app = express();

app.use(express.static(path.join(__dirname, 'public')))

// Configure mustache
app.set('views', `${__dirname}/pages`);
app.set('view engine', 'mustache');
app.engine('mustache', mustacheExpress());

// Render the template
app.get('/', (req, res) => {
    res.render('index', { 
        projects: PROJECTS,
        skills: SKILLS
    });
})

// Render the template for contact
app.get('/contactme', (req, res) => {
    res.render('contactme', {});
})

// set the port the server will listen to
const port = process.env.PORT || 3000;

// start the server and listen for requests on the specified port
app.listen(port, () => {
    // log confirmation of server running to console.
    console.log(`Server running on https://localhost:${port}`);
});