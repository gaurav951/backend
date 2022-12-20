const mongoose = require('mongoose');
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URL, {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to DB!');
}).catch((e) => {
    console.log('Error connecting to DB!');
    console.log(process.env.MONGODB_URL);
    // console.log(e);
});

