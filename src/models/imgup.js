const { Schema, default: mongoose } = require("mongoose");

const imgSchema = new Schema({
    image: String,
    name: String,
    location: String,
    cost: Number
},
{
    timestamps: true,
})

const imgUp = mongoose.models.allimgUp || mongoose.model("allimgUp", imgSchema) ;

export default imgUp;