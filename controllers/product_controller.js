// import thhe product models
const Product = require('../models/product');

// creating  a new product
module.exports.create = async function(req, res) {
    try {
        let product = await Product.create(req.body);
        return res.status(201).json({
            success: true,
            message: "Product Created Successfully",
            data: {
                name: product.name,
                quantity: product.quantity,
            }
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

// display all the products
module.exports.getProducts = async function(req, res) {
    try {
        let products = await Product.find({});
        return res.status(200).json({
            success: true,
            message: "List of Products",
            data: products
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

// update the existing product
module.exports.update = async function(req, res) {
    try {
        let product = await Product.findByIdAndUpdate({_id :req.params.id},
            {
                quantity : req.query.quantity
            }
        ,{new:true});
        return res.status(200).json({
            status: "true",
            message: "Product Updated",
            data:{
                product
            },
        })
    } catch (error) {
        return res.status(500).json ({
            message: error.message
        })
    }
}

// delete the existing product
module.exports.delete = async function(req, res) {
    try {
        let product = await Product.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            success: true,
            message: "Product Deleted Successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
