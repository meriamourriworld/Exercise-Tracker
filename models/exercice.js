const mongoose = require("mongoose");
const {Schema} = mongoose;

const exerciseSchema = new Schema({
    username: 
    {
        type: String,
        required : true
    },
    description :
    {
        type: String,
        required : true
    },
    duration:
    {
        type: Number,
        required : true
    },
    date:
    {
        type: String,
    },
    date1:
    {
        type: Date,
    }
});

module.exports = mongoose.model("Exercise", exerciseSchema);