import {lazy, memo, Suspense} from "react";
import LoadingCircle from "../../styles/LoadingCircle.js";

const Cart = lazy(() => import("../../components/Cart.jsx"));


function RightCard() {
    return (
        <div>
            <Suspense fallback={<div><LoadingCircle/></div>}>
                <Cart/>
            </Suspense>
        </div>
    )
}

export const RightBar = memo(RightCard);