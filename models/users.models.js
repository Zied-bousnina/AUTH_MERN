const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        trim:true,
        unique: true,
        // required: true,
    },
    password: String,   
    role: {
        type: String,
        default: 'USER'

    },
    
},
{
    timestamps:true
}
)

module.exports = mongoose.model('User', userSchema)
