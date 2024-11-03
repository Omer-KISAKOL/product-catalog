import {lazy, memo, Suspense} from "react";

const Cart = lazy(() => import("../../components/Cart.jsx"));


function RightCard() {
    return (
        <div>
            <Suspense fallback={<div>Yükleniyor..................................................</div>}>
                <Cart/>
            </Suspense>
        </div>
    )
}

export const RightBar = memo(RightCard);