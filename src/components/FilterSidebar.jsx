import { useDispatch } from 'react-redux';
import { setFilter } from '../features/productSlice';

function FilterSidebar() {
    const dispatch = useDispatch();

    const handleCategoryChange = (event) => {
        dispatch(setFilter({ type: 'category', value: event.target.value }));
    };

    const handlePriceRangeChange = (event) => {
        dispatch(setFilter({ type: 'priceRange', value: event.target.value }));
    };

    return (
        <aside className="filter-sidebar">
            <h3>Filter</h3>

            <div>
                <label>Category:</label>
                <select onChange={handleCategoryChange}>
                    <option value="">All</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="men's clothing">Mens Clothing</option>
                    <option value="women's clothing">Womens Clothing</option>
                </select>
            </div>

            <div>
                <label>Price Range:</label>
                <select onChange={handlePriceRangeChange}>
                    <option value="">All</option>
                    <option value="0-100">$0 - $100</option>
                    <option value="100-200">$100 - $200</option>
                    <option value="200-500">$200 - $500</option>
                    <option value="500-1000">$500 - $1000</option>
                </select>
            </div>
        </aside>
    );
}

export default FilterSidebar;
