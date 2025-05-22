import ProductCard from "../components/ProductCard";

export default function ProductListPage(){
    return (
        <div>
            <h1>Product List</h1>
            <div>
                <ProductCard id="1" title="Product 1" price={10.99} />
            </div>
        </div>
    )
}