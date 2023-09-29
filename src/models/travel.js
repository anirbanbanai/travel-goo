const { Schema, default: mongoose } = require("mongoose");

const travelSchema = new Schema({
    name: String,
    location: String,
    cost: Number,
},
{
    timestamps: true,
}
)

const Travel = mongoose.models.travelPl || mongoose.model("travelPl", travelSchema) ;

export default Travel;