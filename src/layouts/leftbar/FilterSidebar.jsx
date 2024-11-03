import {useDispatch, useSelector} from 'react-redux';
import {setFilter, setSearch} from '../../features/filterSlice.js';

export default function FilterSidebar() {
    const dispatch = useDispatch();
    const search = useSelector(state => state.filters.search);

    const handleCategoryChange = (event) => {
        dispatch(setFilter({type: 'category', value: event.target.value}));
    };

    const handlePriceRangeChange = (event) => {
        dispatch(setFilter({type: 'priceRange', value: event.target.value}));
    };

    return (
        <aside className="filter-sidebar">

            <div>
                <label htmlFor="search">Search</label>
                <input
                    id="search"
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => dispatch(setSearch(e.target.value))}
                />
            </div>

            <h3>Filter</h3>

            <div>
                <label htmlFor='category'>Category:</label>
                <select id='category' onChange={handleCategoryChange}>
                    <option value="">All</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="men's clothing">Mens Clothing</option>
                    <option value="women's clothing">Womens Clothing</option>
                </select>
            </div>

            <div>
                <label htmlFor='price'>Price Range:</label>
                <select id='price' onChange={handlePriceRangeChange}>
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