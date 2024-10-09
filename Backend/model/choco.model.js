import mongoose from "mongoose";

const chocoSchema = mongoose.Schema({
    id:Number,
    name: String,
    price: Number,
    category: String,
    origin:String,
    image: String,
    title: String,
});
const Choco = mongoose.model("Choco", chocoSchema);

export default Choco;