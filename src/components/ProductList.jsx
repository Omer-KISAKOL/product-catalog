import {useMemo, useRef, useState, useEffect, useCallback, lazy, Suspense} from 'react';
import {useSelector} from 'react-redux';
import {useProducts} from '../hooks/useProducts.js';
import {Filters} from "../utils/Filters.js";

const Products = lazy(() => import("./Products.jsx"));

export default function ProductList() {
    const {data: products, isLoading, error} = useProducts();

    // Lazy loading & Infinite Scroll states
    const [visibleProducts, setVisibleProducts] = useState([]);
    const [page, setPage] = useState(1);
    const observer = useRef();
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

    // Load more items function
    const loadMoreItems = useCallback(() => {
        const nextPage = page + 1;
        const newVisibleProducts = newProducts.slice(0, nextPage * itemsPerPage);
        setVisibleProducts(newVisibleProducts);
        setPage(nextPage);
    }, [page, newProducts]);

    // Intersection Observer kullanarak sayfanın sonuna yaklaşıldığında loadMoreItems fonksiyonunu çalıştırır
    const lastProductRef = useCallback((node) => {
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && visibleProducts.length < newProducts.length) {
                loadMoreItems();
            }
        });
        if (node) observer.current.observe(node);
    }, [loadMoreItems, visibleProducts.length, newProducts.length]);

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
        <Suspense fallback={<div>Yükleniyor....................................................................</div>}>
            <Products products={visibleProducts} lastProductRef={lastProductRef}/>
        </Suspense>
    )
}
