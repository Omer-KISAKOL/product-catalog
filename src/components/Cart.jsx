import {useSelector, useDispatch} from 'react-redux';
import {removeFromCart} from '../features/cartSlice';
import {Card, Image, Rating, Title, Category, Price} from '../styles/card.js';
import {Button} from '../styles/button.js';

export default function Cart() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    console.log(cart);

    return (
        <div className="cart">
            <h3>Total: ${cart.totalAmount.toFixed(2)}</h3>
            <h2>Shopping Cart</h2>
            {cart.items.length > 0 ? (
                cart.items.map((item) => (
                    <Card key={item.id} className="product-card">

                        <div>
                            <Image>
                                <img src={item.image} loading='lazy' alt={item.title} width={50}/>
                            </Image>
                            <Rating>{item.rating.rate} yıldız | {item.rating.count} yorum</Rating>
                        </div>

                        <div>
                            <Title>{item.title}</Title>
                            <Category>{item.category}</Category>
                            <Price>${item.price} x {item.quantity}</Price>
                        </div>

                        <div>
                            <Button onClick={() => dispatch(removeFromCart(item))}>Remove</Button>
                        </div>
                    </Card>
                ))
            ) : (
                <div>
                    Sepetiniz boş!
                </div>
            )
            }
        </div>
    );
}