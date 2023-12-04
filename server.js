

const express = require('express');
const { credential } = require('firebase-admin');
const path = require('path');

let staticPath = path.join(__dirname, 'public');

const app = express();

const admin = require("firebase-admin")
const credentials = require("./serverAccountKey.json")

admin.initializeApp({
    credential: admin.credential.cert(credentials)

});

app.use(express.json());

app.use(express.static(staticPath));

app.use(express.urlencoded({extended: true}));

app.get('/signupin', (req, res) => {
    res.sendFile(path.join(staticPath, 'login.html'));
});

app.post('/signupin', async (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password
    }
    const userResponse = await admin.auth().createUser({
        email: user.email,
        password: user.password,
        emailVerified: false,
        disabled: false
    });
    res.json(userResponse);
});

// Post and Listen request

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Gatinho está miando na porta ${PORT}.`)
});