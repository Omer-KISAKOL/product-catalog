import React, {useMemo, useState, useEffect, Suspense, lazy} from 'react';
import {useQuery} from "react-query";
import {useSelector} from 'react-redux';
import {productsService} from "../../services/products.service";
import {filterProducts} from "../../utils/FilterProducts.js";
import useInView from "../../hooks/shared/useInView.js";
import LoadingCircle from "../../styles/LoadingCircle.js";
import {UI_CONFIG} from "../../constants/config";
import {SkeletonImage} from "../../styles/skeleton.js";
import NoFound from "../NoFound/index.jsx";
import {ProductListContainer} from "./styles.js";

const ProductCard = lazy(() => import("../ProductCard/index.jsx"));

const ProductList = () => {
    const [page, setPage] = useState(1);
    const [visibleProducts, setVisibleProducts] = useState([]);

    const filter = useSelector((state) => state.filters.filter);
    const sort = useSelector((state) => state.filters.sort);
    const search = useSelector((state) => state.filters.search);

    const {data: products, isLoading, error,} = useQuery("products", () => productsService.fetchProducts(), {
        staleTime: 300000, // 5 minutes
        refetchOnWindowFocus: false,
    });

    const filteredProducts = useMemo(() => {
        if (!products) return [];
        return filterProducts(products, filter, sort, search);
    }, [products, filter, sort, search]);

    useEffect(() => {
        if (filteredProducts) {
            setVisibleProducts(filteredProducts.slice(0, UI_CONFIG.ITEMS_PER_PAGE));
        }
    }, [filteredProducts]);

    const {ref: loadMoreRef} = useInView(() => {
        const nextPage = page + 1;
        const newVisibleProducts = filteredProducts.slice(0, nextPage * UI_CONFIG.ITEMS_PER_PAGE);
        setVisibleProducts(newVisibleProducts);
        setPage(nextPage);
    })

    if (isLoading) return <div><LoadingCircle/></div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!visibleProducts.length) return <div><NoFound/></div>;

    console.log(visibleProducts, filteredProducts);

    return (
        <div>
            <ProductListContainer>
                {visibleProducts.map((product) => (
                    <div
                        key={product.id}
                    >
                        <Suspense fallback={<div><SkeletonImage/></div>}>
                            <ProductCard product={product}/>
                        </Suspense>
                    </div>
                ))}
            </ProductListContainer>
            <div ref={loadMoreRef}>
                {visibleProducts.length > 0 && (<div>No more products found!</div>)}
            </div>
        </div>
    )
}

ProductList.displayName = "ProductList";

export default React.memo(ProductList);