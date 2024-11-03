import { useDispatch } from 'react-redux';
import PropTypes from "prop-types";
import { addToCart } from '../features/cartSlice';
import {memo, useCallback} from "react";

function ProductInfo({ product })  {
    const dispatch = useDispatch();

    const handleAddToCart = useCallback(() => {
        dispatch(addToCart(product));
    }, [dispatch, product]);

    return (
        <div className="product-card">

            <div>
                <img src={product.image} alt={product.title} width={50}/>
                <p>{product.rating.rate} yıldız</p>
                <p>{product.rating.count} yorum</p>
            </div>

            <div>
                <h3>{product.title}</h3>
                <p>{product.category}</p>
                <p>{product.price}</p>
            </div>

            <div>
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
}

export const ProductCard = memo(ProductInfo);

ProductInfo.propTypes = {
    product: PropTypes.object.isRequired,
}