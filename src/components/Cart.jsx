import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../features/cartSlice';

export default function Cart() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    console.log(cart);

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cart.items.length > 0 ? (
                cart.items.map((item) => (
                <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.title} width={150}/>
                    <p>{item.rating.rate} yıldız</p>
                    <p>{item.rating.count} yorum</p>
                    <p>{item.title}</p>
                    <p>{item.category}</p>
                    <p>${item.price} x {item.quantity}</p>
                    <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
                    <hr/>
                </div>
                ))
                ):(
                    <div>
                        Sepetiniz boş!
                    </div>
                    )
                }
            <h3>Total: ${cart.totalAmount.toFixed(2)}</h3>
        </div>
    );
}