const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    stock: { type: Number, required: true },
    imageUrl: { type: String },


},
    {
        timestamps: true, // Auto-adds createdAt and updatedAt
        versionKey: false
    })

const ProductModel = mongoose.Model("productModel", productSchema)

module.exports = ProductModel