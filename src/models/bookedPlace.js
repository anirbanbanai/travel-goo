const { Schema, default: mongoose } = require("mongoose");

const bookedSchema = new Schema({
    image: String,
    name: String,
    location: String,
    cost: Number,
     booked:Boolean,
},
{
    timestamps: true,
})

const bookedUp = mongoose.models.booked || mongoose.model("booked", bookedSchema) ;

export default bookedUp;