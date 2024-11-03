import {useMemo, useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useProducts} from '../hooks/useProducts.js';
import {Filters} from "../utils/Filters.js";
import useInView from "../hooks/shared/useInView.js";
import Products from "./Products.jsx";
import LoadingCircle from "../styles/LoadingCircle.js";

export default function ProductList() {
    const {data: products, isLoading, error} = useProducts();

    // Lazy loading & Infinite Scroll states
    const [visibleProducts, setVisibleProducts] = useState([]);
    const [page, setPage] = useState(1);
    const filter = useSelector((state) => state.filters.filter);
    const sort = useSelector((state) => state.filters.sort);
    const search = useSelector((state) => state.filters.search);
    const itemsPerPage = 5;


    const newProducts = useMemo(() => Filters(products, filter, sort, search), [products, filter, sort, search]);

    useEffect(() => {
        if (newProducts) {
            setVisibleProducts(newProducts.slice(0, itemsPerPage));
        }
    }, [newProducts]);

    const {ref: loadMoreRef} = useInView(
        () => {
            const nextPage = page + 1;
            const newVisibleProducts = newProducts.slice(0, nextPage * itemsPerPage);
            setVisibleProducts(newVisibleProducts);
            setPage(nextPage);
        }
    )

    if (isLoading) return (
        <div>
            <p>Loading products...</p>
        </div>

    );
    if (error) return (
        <div>
            <p>Error fetching products.</p>
        </div>
    );
    console.log(visibleProducts, newProducts);

    return (
        <div>
            <Products products={visibleProducts}/>
            <div ref={loadMoreRef}>
                {visibleProducts.length > 0 && (<div><LoadingCircle size="20px"/></div>)}
            </div>
        </div>
    )
}
