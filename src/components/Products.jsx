import {lazy, memo, Suspense} from "react";
import PropTypes from "prop-types";

const ProductCard = lazy(() => import("./ProductCard.jsx"));

function Product({products, lastProductRef}) {
    return (
        <div className="product-grid">
            {products.length > 0 ? (
                products.map((product, index) => (
                    <div
                        key={product.id}
                        ref={index === products.length - 1 ? lastProductRef : null}
                    >
                        <Suspense fallback={<div>Yükleniyor..................................................</div>}>
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
    lastProductRef: PropTypes.func.isRequired
}