

const Product = require("../models/Product");

// Get /api/products

const getProducts = async (req,res) => {

  try{
    const products= await Product.find().sort({createdAt: -1});

    res.status(200).json(products);

    }catch (error){
    res.status(500).json({
        message:"failed to fetch products",
        error:error.message,
    });
   }
 }

// GET /API/PRODUCTS/:ID

 const getProductById = async (req,res) =>{
    try{
        const product = await Product.findById(req.params.id);

        if (!product){
            return res.status(404).json({
                message:"Product not found",
            });
        }

        res.status(200).json(product);
    }catch(error){
        res.status(500).json({
            message:"failed to fetch product",
            error: error.message,
        });
    }
 };

 // POST /API/PRODUCTS

    const createProduct = async (req, res) => {
    try {
        const { name, description, price, category, stock, image } = req.body;

        if (!name || !description || price === undefined || !category) {
        return res.status(400).json({
            message: "Name, description, price, and category are required",
        });
        }

        const product = await Product.create({
        name,
        description,
        price,
        category,
        stock,
        image,
        });

        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({
        message: "Failed to create product",
        error: error.message,
        });
    }
    };

// PUT /api/products/:id

 const updateProduct = async (req,res) => {
    try{
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new:true,
                runvalidators:true,
            }
        );

        if(!product){
            return res.status(404).json({
                message:"Product not found"
            });
        }
        res.status(200).json(product);
    } catch (error){
        res.status(500).json({
            message:"Product not found",
            error: error.message,
        });
    }
 };
  
 // DELETE /api/products/:id
 const deleteProduct = async (req,res) =>{
    try{
        const product= await Product.findByIdAndDelete(req.params.id)

        if (!product){
            return res.status(404).json({
                message:"Product not found",
            });
        }

        res.status(200).json({
            message:"Product deleted successfully"
        });

    }catch (error){
        res.status(500).json({
            message:"failed to delete product",
            error: error.message,
        });
    }
 };

  module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
  };


 