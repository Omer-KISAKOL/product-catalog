import {lazy, memo, Suspense} from "react";
import PropTypes from "prop-types";
import {SkeletonImage} from "../styles/skeleton.js";

const ProductCard = lazy(() => import("./ProductCard.jsx"));

function Product({products}) {
    return (
        <div className="product-grid">
            {products.length > 0 ? (
                products.map((product) => (
                    <div
                        key={product.id}
                    >
                        <Suspense fallback={<div><SkeletonImage/></div>}>
                            <ProductCard product={product}/>
                        </Suspense>
                    </div>
                ))
            ) : (
                <div>Maalesef aradığınız ürün bulunamamakta.</div>
            )}
        </div>
    )
}

const Products = memo(Product);
export default Products;

Product.propTypes = {
    products: PropTypes.array.isRequired,
}