// This file is to host our global state and various functions that we can use throughout our app.
// It is a good practice to keep our global state in a separate file so that we can easily manage it.

// import { useState } from "react";
import { create } from "zustand";

// This is a custom hook that we can use to access our global state.
export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    createProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.description || !newProduct.price || !newProduct.image) {
            return { success: false, message: "Please fill in all fields" };
        }
        const res = await fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
        });
        const data = await res.json();
        set((state) => ({
            products: [...state.products, data.data],
        }));
        return { success: true, message: "Product created successfully" };
    },
    fetchProducts: async () => {
        const res = await fetch("/api/products");
        const data = await res.json();
        set({ products: data.data });
    },
    deleteProduct: async (pid) => {
        const res = await fetch(`/api/products/${pid}`, {
            method: "DELETE",
        });
        const data = await res.json();
        if (!data.success) return { success: false, message: data.message };
        
        // Here we're updating the state directly after the delete request is successful. This is a good practice to keep the UI in sync with the server state. We complete this by removing the product with the matching pid from the products array. The function uses the filter method to create a new array that excludes the product with the matching _id. The set function is then called to update the products state with this new array.
        set((state) => ({
            products: state.products.filter((product) => product._id !== pid)
        }));
        return { success: true, message: data.message };
    },
    // deleteProduct: async (id) => {
    //     const res = await fetch(`/api/products/${id}`, {
    //         method: "DELETE",
    //     });
    //     const data = await res.json();
    //     set((state) => ({
    //         products: state.products.filter((product) => product._id !== id),
    //     }));
    //     return { success: true, message: "Product deleted successfully" };
    // },
}));

// This is boilerplate local state hook.
// const [state, setState] = useState([])