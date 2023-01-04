import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router()
import Product from '../models/productModel.js'

//this fetches all products
//route to GET/api/products
router.get('/', asyncHandler(async (req,res) => {
     const products = await Product.find({})

    res.json(products)
}))

//this fetches a single product
//route to GET/api/products/:id
router.get('/:id', asyncHandler(async (req,res) => {
    const product = await Product.findById(req.params.id)

        if(product) {
            res.json(product)
        } else {
            res.status(404).json({ message: 'Product not found' })
        }
}))

export default router