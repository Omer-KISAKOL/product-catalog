import {lazy, Suspense} from "react";

const Cart = lazy(() => import("../components/Cart.jsx"));

export default function CartPage() {

    return (
        <div>
            <Suspense fallback={<div>Yükleniyor..................................................</div>}>
                <Cart/>
            </Suspense>
        </div>
    )
}
