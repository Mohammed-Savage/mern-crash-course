// This is the conventional method of creating an express app.
// const express = require('express');
// There's nothing wrong with this but we're going to avoid using the 'require' syntax. We're going to use a more modern syntax. The modern syntax is ES modules. We can do this because we added the required type to our package.json. This allows us to use simple import export syntax.

import express from 'express';
import dotenv from 'dotenv';
import path from 'path'; // This is a built-in Node.js module that provides utilities for working with file and directory paths.
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';

// We no longer require these dependencies because we migrated our endpoints and routes to our product route file.
// import Product from './models/product.model.js';
// import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve(); // This is a built-in Node.js method that returns the directory name of the current module. This is used to resolve the path to our static files.

app.use(express.json()); // This is middleware that allows us to parse JSON requests. This allows us to accept JSON data in our request.body. Middleware is just a function that runs before we send a response back to the client.

app.use("/api/products", productRoutes);

// This is our async function to grab all products in our database collection:

// app.get("/api/products", async (req, res) => {
//     try {
//         const products = await Product.find({});
//         res.status(200).json({ success: true, data: products });
//     } catch (error) {
//         console.log("Error in fetching products:", error.message);
//         res.status(500).json({ success: false, message: 'Server Error.' });
//     }
// });

// app.post("/api/products", async (req, res) => {
//     const product = req.body; // This is the product information the user will provide.

//     if(!product.name || !product.price || !product.image) {
//         return res.status(400).json({ success:false, message: "Please provide all fields." });
//         // The literal English translation of the if statement logic is "If product.name/price/image is false". This will then provide them with a 400 status code and our custom error message.
//     }

//     const newProduct = new Product(product);

//     try {
//         await newProduct.save();
//         res.status(201).json({ success: true, data: newProduct });
//     } catch (error) { 
//         console.error("Error in Create product:", error.message);
//         res.status(500).json({ success: false, message: 'Server Error.' });
//     }
// });

// // Ideally each of our CRUD methods would have their own separate files. We'll optimize our code for that eventually. This is the most begginer friendly way to structure our CRUD functions.

// app.put("/api/products/:id", async (req, res) => {
//     const { id } = req.params;
//     const product = req.body;

//     // We would use the following if we were maintaining our own database instead of letting Mongo handle our database collections.
//     // if(!product.name ||!product.price ||!product.image) {
//     //     return res.status(400).json({ success: false, message: "Please provide all fields." });
//     // }

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//         return res.status(404).json({ success: false, message: "Invalid Product ID" });
//     }

//     try {
//         const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
//         res.status(200).json({ success: true, data: updatedProduct });
//     } catch (error) {
//         res.status(500).json({ success: false, message: "Server Error"});
//         // This is alternate syntax that does the same as above:
//         // console.log("Error Updating product:", error.message);
//         // res.status(404).json({ success: false, message: "Product not found"})
//     }
// });

// app.delete("/api/products/:id", async (req, res) => {
//     const { id } = req.params;
//     try {
//         await Product.findByIdAndDelete(id);
//         res.status(200).json({ success: true, message: "Product deleted successfully" });
//     } catch (error) {
//         console.log("Error Deleting product:", error.message);
//         res.status(404).json({ success: false, message: "Product not found"})
//     }
// });

app.listen(PORT, () => {
    connectDB(); // This function connects us to our MongoDB. This function is in 'db.js' file.
    console.log('Server started at http://localhost:'+ PORT);
});

// To install my driver I need to run the following: npm install mongodb
