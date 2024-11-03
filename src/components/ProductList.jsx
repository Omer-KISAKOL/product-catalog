import {ProductCard} from './ProductCard.jsx';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useProducts } from '../hooks/useProducts.js';
import {Filters} from "../utils/Filters.js";

export default function ProductList() {
    const { data: products, isLoading, error } = useProducts();
    
    const filter = useSelector((state) => state.filters.filter);
    const sort = useSelector((state) => state.filters.sort);

    const newProducts = useMemo(() => Filters(products, filter, sort), [products, filter, sort]);

    if (isLoading) return(
        <div>
            <p>Loading products...</p>
        </div>

    );
    if (error) return(
        <div>
            <p>Error fetching products.</p>
        </div>
    );
    console.log(products);

    return (
        <div className="product-grid">
            {newProducts.length > 0 ? (
                newProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            ):(
                <div>
                  Maalesef aradığınız ürün bulunamamakta.
                </div>
            )}
        </div>
    );
}
