const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
    title: {type: String, required: true},
    price: {type: String, required: true},
    desc: String,
})

export const Product = model("product", ProductSchema);