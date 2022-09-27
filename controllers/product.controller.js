const createError = require("http-error");
const Product = require("../models/product.model");

module.exports = {
    getAllProducts: async (req,res,next) => {
        try {
            const result = await Product.find({}, {__V: 0});
            res.send(result);
        } catch(err) {
            console.log(err.message);
        }
    },

    createNewProduct: async (req,res,next) => {
        try {
            const product = new Product({
                name: req.body.name,
                price: req.body.price
            })
            const result = await product.save();
            res.send(result)
        } catch(err) {
            console.log(err.message);
        }
    },

    findProductById: async(req, res, next) => {
        const id = req.params.id;
        try {
            const product = await Product.findById(id);
            res.send(product);
        } catch (error) {
            console.log(err.message)
        }
    },

    updateProductById: async (req, res, next) => {
        try {
            const id = req.params.id;
            const update = req.body;
            const options = {new: true}

            const result = await Product.findByIdAndUpdate(id,update,options)
            res.send(result)
            
        } catch (error) {
            console.log(error.message);
        }
    },

    deleteProductById: async(req,res,next) => {
        const id = req.params.id;
        try {
            const result = await Product.findByIdAndDelete(id)
            res.send(result);
        } catch (error) {
            console.log(error.message);
        }
    }
}