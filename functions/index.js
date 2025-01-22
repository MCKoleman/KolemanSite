const functions = require('firebase-functions');
const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors');
require('firebase-functions/logger/compat');

const app = express();
const corsOptions = {origin: true};

admin.initializeApp();

// Firebase Trigger Email
app.post('/', cors(corsOptions), function(request, response, next) {
    try {
        const {name, email, messageContent} = JSON.parse(request.body);
        console.log("Server received message: " + request.body);
        admin.firestore().collection('email_collection').add({
            to: `kristian@koleman.dev`,
            from: `KolemanDev <no-reply@koleman.dev>`,
            message: {
                subject: `koleman.dev - ${name} <${email}>`,
                html: `<p>${messageContent}</p>`
            }
        });
        response.status(200).send('Email sent');
    }
    catch (err) {
        console.log(err);
        response.status(418).send(err);
    }
});

exports.email = functions.https.onRequest(app);