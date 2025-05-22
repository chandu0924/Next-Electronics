"use client";

import { useState } from "react";
import styles from "./RightSidebar.module.css";

const RightSidebar = () => {
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        quantity: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("New Product:", formData);
        // You can handle API or state updates here
    };

    return (
        <div className={styles.sidebarContainer}>
            <h2 className={styles.sidebarHeading}>Add New Product</h2>
            <form onSubmit={handleSubmit} className={styles.addProductForm}>
                <label className={styles.addProductLabel}>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={styles.addProductInput}
                    />
                </label>
                <label className={styles.addProductLabel}>
                    Price:
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                        className={styles.addProductInput}
                    />
                </label>
                <label className={styles.addProductLabel}>
                    Quantity:
                    <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        required
                        className={styles.addProductInput}
                    />
                </label>
                <button type="submit" className={styles.addProductButton}>
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default RightSidebar;
