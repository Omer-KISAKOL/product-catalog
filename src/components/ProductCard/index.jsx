import {useDispatch} from 'react-redux';
import PropTypes from "prop-types";
import {addToCart} from '../../store/slices/cartSlice.js';
import {lazy, memo, Suspense, useCallback} from "react";
import {Card, Image, Rating, Title, Category, Price} from '../../styles/card.js';
import {Button} from '../../styles/button.js';
import LoadingCircle from "../../styles/LoadingCircle.js";
import {ProductType} from "../../types/product.types.js";
import {trimText} from "../../utils/TextTrim.js";

const LazyImage = lazy(() => import("../../utils/LazyImage.jsx"));

const ProductCard = memo(({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = useCallback(() => {
        dispatch(addToCart(product));
    }, [dispatch, product]);

    return (
        <Card>
            <div>
                <Image>
                    <Suspense fallback={<div><LoadingCircle size="30px"/></div>}>
                        <LazyImage src={product.image} alt={product.name} width={50}/>
                    </Suspense>
                </Image>
                <Rating>{product.rating.rate} ★ <span>({product.rating.count})</span></Rating>
            </div>

            <div>
                <Title>{trimText(product.title, 30) }</Title>
                <Category>{product.category}</Category>
                <Price>${product.price}</Price>
            </div>

            <div>
                <Button onClick={handleAddToCart} primary="true">Add to Cart</Button>
            </div>
        </Card>
    );
});

ProductCard.propTypes = {
    product: PropTypes.shape(ProductType).isRequired,
};

ProductCard.displayName = "ProductCard";

export default ProductCard;
