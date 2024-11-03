import {useDispatch} from 'react-redux';
import {setSort} from '../../features/filterSlice.js';

export default function SortingBar() {
    const dispatch = useDispatch();

    const handleSortChange = (event) => {
        dispatch(setSort(event.target.value));
    };

    return (
        <div className="sorting-bar">
            <h3>Sort</h3>
            <label htmlFor='sort'>Sort by:</label>
            <select id='sort' onChange={handleSortChange}>
                <option value="">Default</option>
                <option value="price-down">Price: Low to High</option>
                <option value="price-up">Price: High to Low</option>
                <option value="popularity">Popularity</option>
            </select>
        </div>
    );
}