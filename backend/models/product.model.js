// After importing mongoose we need to create a product schema and a product object. Our product schema will have fields for name, price, image etc.

import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
}, {
    timestamps: true, // This will add a created at and updated at timestamp to our product objects.
});

// Product Schema created we move on to creating the product object. The following object will inform Mongoose that we are creating a new product with the aforementioned properties.

const Product = mongoose.model("Product", productSchema);

// Mongoose will modify our "Product" into a plural with the proper lowercase letter. We export our product object for use in other components:

export default Product;