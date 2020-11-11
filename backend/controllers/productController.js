import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';

//@desc     Fetch all Products
//@route    GET api/products
//@access   Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

//@desc     Fetch single Product
//@route    GET api/products/:id
//@access   Public
const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

//@desc     DELETE a Product
//@route    DELETE api/products/:id
//@access   Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({ message: 'Product Deleted Successfully' });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

export { getProducts, getProduct, deleteProduct };
