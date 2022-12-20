const mongoose = require('mongoose');
const validator = require('validator');

const contactusSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email id already present"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email");
            }
        }
    },
    subject: {
        type: String,
        required: true,
        minlength: 3
    },
    message: {
        type: String,
        required: true,
        minlength: 3
    }

});

const Contactus = new mongoose.model('Contactus', contactusSchema);
module.exports = Contactus;