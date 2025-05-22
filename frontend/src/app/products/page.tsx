"use client";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";

export default function ProductListPage(){

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/products/allProducts")
        .then(response => response.json())
        .then(data => {
            setProducts(data);
        });
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            <div>
            {products.map((product) => {
            
                return <ProductCard key={product._id} title={product.name} price={product.price} quantity={product.quantity} />
        
            })}
            {/* <ProductCard id="1" title="Product 1" price={10.99} /> */}
            </div>
        </div>
    )
}