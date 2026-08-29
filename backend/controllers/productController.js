const ProductModel = require("../Model/productModel")
const UserModel = require("../Model/userModel")

const create = async (req, res) => {
    let { title, description, price, category, stock } = req.body
    let createdBy = req.user?.id

    if (!title || !description || !price || !category || !stock || !createdBy) {
        return res.status(400).json({
            success: false,
            message: "title, description, price, category, stock and seller Id are required"
        })
    }
    try {
        const user = await UserModel.findById(createdBy)
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "seller not found"
            })
        }

        const product = await ProductModel.create({ 
            title, 
            description, 
            price, 
            category, 
            stock, 
            sellerId: user._id 
        })

        res.status(201).json({
            success: true,
            message: "product created successfully",
            product: product
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const allProducts = async (req, res) => {
    try {
        const products = await ProductModel.find()
        res.status(200).json({
            success: true,
            message: "All Products fetched successfully",
            products: products
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const product = async (req, res) => {
    const { id } = req.params
    if (!id) {
        return res.status(400).json({
            success: false,
            message: "product id is required"
        })
    }
    try {
        const product = await ProductModel.findById(id)
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "product not found"
            })
        }
        res.status(200).json({
            success: true,
            message: "product fetched successfully",
            product: product
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const update = async (req, res) => {
    const productId = req.params.id
    const updateData = req.body

    if (!productId) {
        return res.status(400).json({
            success: false,
            message: "product id is required"
        })
    }
    try {
        const updatedProduct = await ProductModel.findByIdAndUpdate(
            productId, 
            updateData, 
            { returnDocument: 'after', runValidators: true }
        )

        if (!updatedProduct) {
            return res.status(404).json({
                success: false,
                message: "product not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            updatedProduct: updatedProduct
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const del = async (req, res) => {
    const ProductId = req.params.id
    if (!ProductId) {
        return res.status(400).json({
            success: false,
            message: "product id is required"
        })
    }
    try {
        const deletedProduct = await ProductModel.findByIdAndDelete(ProductId)

        if (!deletedProduct) {
            return res.status(404).json({
                success: false,
                message: "product not found"
            })
        }
        res.status(200).json({
            success: true,
            message: "product deleted successfully",
            product: deletedProduct
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = { create, allProducts, product, update, del }