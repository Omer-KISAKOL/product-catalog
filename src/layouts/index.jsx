import SortingBar from "./leftbar/SortingBar.jsx";
import FilterSidebar from "./leftbar/FilterSidebar.jsx";
import HomePage from "../pages/HomePage.jsx";
import {RightBar} from "./rightbar/index.jsx";

export default function MainLayout() {
    return (
        <div>

            <div>
                <div><FilterSidebar/></div>
                <div><SortingBar/></div>
            </div>

            <div>
                <HomePage/>
            </div>

            <div>
                <RightBar/>
            </div>

        </div>
    )
}