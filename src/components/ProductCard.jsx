import {useDispatch} from 'react-redux';
import PropTypes from "prop-types";
import {addToCart} from '../features/cartSlice';
import {useCallback} from "react";
import {Card, Image, Rating, Title, Category, Price} from '../styles/card.js';
import {Button} from '../styles/button.js';

export default function ProductCard({product}) {
    const dispatch = useDispatch();

    const handleAddToCart = useCallback(() => {
        dispatch(addToCart(product));
    }, [dispatch, product]);

    return (
        <Card>
            <div>
                <Image>
                    <img src={product.image} loading='lazy' alt={product.title} width={50}/>
                </Image>
                <Rating>{product.rating.rate} yıldız | {product.rating.count} yorum</Rating>
            </div>

            <div>
                <Title>{product.title}</Title>
                <Category>{product.category}</Category>
                <Price>${product.price}</Price>
            </div>

            <div>
                <Button onClick={handleAddToCart} primary="true">Add to Cart</Button>
            </div>
        </Card>
    );
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
}