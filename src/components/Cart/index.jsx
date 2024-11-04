import {useSelector, useDispatch} from 'react-redux';
import {addToCart, removeFromCart} from '../../store/slices/cartSlice.js';
import {Card, Image, Rating, Title, Category, Price, TitleH} from '../../styles/card.js';
import {Button} from '../../styles/button.js';
import {lazy, Suspense} from "react";
import LoadingCircle from "../../styles/LoadingCircle.js";
import {ProductListContainer} from "../ProductList/styles.js";
import { IoTrashOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import {CartContent, Container, IconButton, Quantity} from "../../layouts/styles.js";

const LazyImage = lazy(() => import("../../utils/LazyImage.jsx"));

export default function Cart() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    console.log(cart);

    return (
        <CartContent>
            <TitleH>Shopping Cart</TitleH>

            <ProductListContainer>
                {cart.items.length > 0 ? (
                    cart.items.map((item) => (
                        <Card key={item.id}>
                            <div>
                                <Image>
                                    <Suspense fallback={<div><LoadingCircle size="30px"/></div>}>
                                        <LazyImage src={item.image} alt={item.name} width={50}/>
                                    </Suspense>
                                </Image>
                                <Rating>{item.rating.rate} yıldız | {item.rating.count} yorum</Rating>
                            </div>

                            <div>
                                <Title>{item.title}</Title>
                                <Category>{item.category}</Category>
                                <Price>${item.price * item.quantity}</Price>
                            </div>

                            <Container>
                                <IconButton
                                    onClick={() => dispatch(removeFromCart(item))}><IoTrashOutline/></IconButton>
                                <Quantity>{item.quantity}</Quantity>
                                <IconButton onClick={() => dispatch(addToCart(item))}
                                            primary="true"><FaPlus/></IconButton>
                            </Container>
                        </Card>
                    ))
                ) : (
                    <div>
                        Your cart is empty!
                    </div>
                )
                }
            </ProductListContainer>

            <ProductListContainer>
                <h3>Total: ${cart.totalAmount.toFixed(2)}</h3>
                <Button primary="true">Complete order</Button>
            </ProductListContainer>


        </CartContent>
    );
}