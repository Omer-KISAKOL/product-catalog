import { useDispatch } from 'react-redux';
import { setSort } from '../../features/filterSlice.js';

export default function SortingBar() {
    const dispatch = useDispatch();

    const handleSortChange = (event) => {
        dispatch(setSort(event.target.value));
    };

    return (
        <div className="sorting-bar">
            <label>Sort by:</label>
            <select onChange={handleSortChange}>
                <option value="">Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="popularity">Popularity</option>
            </select>
        </div>
    );
}