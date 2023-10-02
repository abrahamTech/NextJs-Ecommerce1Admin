const { Schema, model, default: mongoose } = require("mongoose");

const ProductSchema = new Schema({
    title: {type: String, required: true},
    price: {type: String, required: true},
    desc: {type: String},
})

// export const Product = model("Product", ProductSchema);
export default mongoose.models.Product || mongoose.model("Product", ProductSchema)