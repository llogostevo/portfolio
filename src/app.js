// Email modules
require('dotenv').config();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

// import express framework
const express = require('express');
// import path module to work with file paths
const path = require('path');
const mustacheExpress = require('mustache-express');
const PROJECTS = require('./projects');
const SKILLS = require('./skills');



// create a new instance of the express application
const app = express();

// configure app to use bodyparser middleware to take from form to email 
app.use(bodyParser.urlencoded({extended: false}));


// express
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

const transporter = nodemailer.createTransport({
    host:'mail.gmx.com', //smtp host
    port: 465, //smtp port
    secure: true, // secure version of transport
    auth: {
        // user+pass keys from .env file
        user: process.env.EMAIL_ID,
        pass: process.env.EMAIL_PASSWORD
    }
});

// contact form route
app.post('/contactme', (req,res) =>{
    console.log(req.body);
    const {name, email, inquiryType, message} = req.body;
    const mailOptions = {
        from: process.env.EMAIL_ID,
        to: process.env.EMAIL_ID,
        subject: `New inquiry from ${name} - ${inquiryType}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info)=> {
        if (error) {
            console.error(error);
            res.send('There was an error sending your message, please try again')
        } else {
            console.log('Email sent: '+info.response);
            res.status(200).send('Your message was sent successfully!');
        }
    });

});

// set the port the server will listen to
const port = process.env.PORT || 3000;

// start the server and listen for requests on the specified port
app.listen(port, () => {
    // log confirmation of server running to console.
    console.log(`Server running on https://localhost:${port}`);
});