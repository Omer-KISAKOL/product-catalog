import {lazy, Suspense} from "react";
import LoadingCircle from "../styles/LoadingCircle.js";


const Cart = lazy(() => import("../components/Cart.jsx"));

export default function CartPage() {

    return (
        <div>
            <Suspense fallback={<div><LoadingCircle/></div>}>
                <Cart/>
            </Suspense>
        </div>
    )
}
