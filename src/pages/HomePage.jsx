import FilterSidebar from "../components/FilterSidebar.jsx";
import SortingBar from "../components/SortingBar.jsx";
import ProductList from "../components/ProductList.jsx";


function HomePage() {


    return (
        <div>

            <div>
                <FilterSidebar/>
                <SortingBar/>
            </div>

            <div>
                <ProductList />
            </div>

        </div>
    )
}

export default HomePage