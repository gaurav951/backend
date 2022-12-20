const express = require('express');
const app = express();
require("dotenv").config();
require('./db/conn');
const Contactus = require('./models/contactus');
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors({
    origin: 'https://gauravverma-23c6b.web.app'
}));

app.get('/', (req, res) => {
    res.send('Server is Running! op bagi 🚀');
});

app.use(express.json());

app.post('/send',(_req, res) => {
    console.log(_req.body);
    const contactus = new Contactus(_req.body);
    contactus.save().then(() => {
        console.log('Data saved to DB!');
    }).catch((e) => {
        console.log('Error saving data to DB!');
        console.log(e);
    });
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});