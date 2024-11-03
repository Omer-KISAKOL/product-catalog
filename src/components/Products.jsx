import {memo} from "react";
import {ProductCard} from "./ProductCard.jsx";
import PropTypes from "prop-types";
function Product({ products, lastProductRef }) {
    return (
        <div className="product-grid">
            {products.length > 0 ? (
                products.map((product, index) => (
                    <div
                        key={product.id}
                        ref={index === products.length - 1 ? lastProductRef : null}
                    >
                        <ProductCard product={product}/>
                        <hr/>
                        <br/>
                    </div>
                ))
            ) : (
                <div>Maalesef aradığınız ürün bulunamamakta.</div>
            )}
        </div>
    )
}

export const Products = memo(Product);

Product.propTypes = {
    products: PropTypes.array.isRequired,
    lastProductRef: PropTypes.func.isRequired
}