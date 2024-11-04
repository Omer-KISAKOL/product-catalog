import {lazy, memo, Suspense} from "react";
import LoadingCircle from "../../styles/LoadingCircle.js";
// import {Button} from "../../styles/button.js";
import {Link} from "react-router-dom";
import {Button} from "../../styles/button.js";

const Cart = lazy(() => import("../../components/Cart/index.jsx"));


function RightCard() {
    return (
        <div>
            <Suspense fallback={<div><LoadingCircle/></div>}>
                <Cart/>
            </Suspense>
            <Link to="/cart" target="_blank">
                <Button primary="true">Cart Page</Button>
            </Link>
        </div>
    )
}

export const RightBar = memo(RightCard);