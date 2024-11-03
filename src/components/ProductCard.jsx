import { useDispatch } from 'react-redux';
import PropTypes from "prop-types";
import { addToCart } from '../features/cartSlice';
import {useCallback} from "react";

export function ProductCard({ product })  {
    const dispatch = useDispatch();

    const handleAddToCart = useCallback(() => {
        dispatch(addToCart(product));
    }, [dispatch, product]);

    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} width={150}/>
            <p>{product.rating.rate} yıldız</p>
            <p>{product.rating.count} yorum</p>
            <h3>{product.title}</h3>
            <p>{product.category}</p>
            <p>{product.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
            <hr/>
            <hr/>
        </div>
    );
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
}