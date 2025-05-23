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
        try {
            const res = await fetch("/api/products");
            if (!res.ok) {
                const errorData = await res.json();
                console.error("Fetch error:", errorData.message);
                return;
            }

            const data = await res.json();
            set({ products: data.data });
        } catch (error) {
            console.error("Network error in fetchProducts:", error.message);
        }
    },
    deleteProduct: async (pid) => {
        try {
            const res = await fetch(`/api/products/${pid}`, {
                method: "DELETE",
            });

            if (!res.ok) {
                const errorData = await res.json();
                console.error("Delete error:", errorData.message);
                return { success: false, message: errorData.message };
            }

            const data = await res.json();

            if (!data.success) {
                return { success: false, message: data.message };
            }
            // This is us updating the state to remove the deleted product from the products page in our UI wihtout having to refresh the page.
            set((state) => ({
                products: state.products.filter((product) => product._id !== pid),
            }));

            return { success: true, message: data.message };
        } catch (err) {
            console.error("Network error in deleteProduct:", err.message);
            return { success: false, message: "Something went wrong. Please try again." };
        }
    },
    updateProduct: async (pid, updatedProduct) => {
        try {
            const res = await fetch(`/api/products/${pid}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedProduct),
            });

            if (!res.ok) {
                const errorData = await res.json();
                console.error("Update error:", errorData.message);
                return { success: false, message: errorData.message };
            }

            const data = await res.json();

            if (!data.success) {
                return { success: false, message: data.message };
            }

            // This is us updating the state to display the updated product details in the UI immediately without having to refresh the page.
            set((state) => ({
                products: state.products.map((product) => (product._id === pid ? data.data : product)),
            }));

            return { success: true, message: data.message };
        } catch (err) {
            console.error("Network error in updateProduct:", err.message);
            return { success: false, message: "Something went wrong. Please try again." };
        }
    },
}));

// This is boilerplate local state hook.
// const [state, setState] = useState([])