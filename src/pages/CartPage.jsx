import {lazy, Suspense} from "react";
import LoadingCircle from "../styles/LoadingCircle.js";


const Cart = lazy(() => import("../components/Cart/index.jsx"));

export default function CartPage() {

    return (
        <div
            style={{display: "flex", justifyContent: "center"}}
        >
            <Suspense fallback={<div><LoadingCircle/></div>}>
                <Cart/>
            </Suspense>
        </div>
    )
}
