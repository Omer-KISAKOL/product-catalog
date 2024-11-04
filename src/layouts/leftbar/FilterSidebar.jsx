import {useDispatch, useSelector} from 'react-redux';
import {setFilter, setSearch, setSort} from '../../store/slices/filterSlice.js';
import {useState} from "react";
import {
    FilterOption,
    FilterSection,
    FilterTitle,
    Search,
    SidebarContainer,
    SortDropdown,
    ToggleLeftButton
} from "./styles.js";

export default function FilterSidebar(toggleSidebar,isOpen) {
    const dispatch = useDispatch();
    const search = useSelector(state => state.filters.search);
    const [category, setCategory] = useState('');
    const [priceRange, setPriceRange] = useState('');


    const handleCategoryChange = (value) => {
        dispatch(setFilter({type: 'category', value: value}));
        setCategory(value);
    };

    const handlePriceRangeChange = (value) => {
        dispatch(setFilter({type: 'priceRange', value: value}));
        setPriceRange(value);
    };

    const handleSortChange = (e) => {
        dispatch(setSort(e.target.value));
    };

    return (
        <>
            <ToggleLeftButton onClick={toggleSidebar}>
                {isOpen ? 'Close' : 'Filters'}
            </ToggleLeftButton>
            <SidebarContainer isOpen={isOpen}>

                <div>
                    <Search
                        id="search"
                        type="text"
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) => dispatch(setSearch(e.target.value))}
                    />
                </div>

                <FilterSection>
                    <FilterTitle>Sort by</FilterTitle>
                    <SortDropdown id="sort" onChange={handleSortChange}>
                        <option value="">All</option>
                        <option value="price-down">Price: Low to High</option>
                        <option value="price-up">Price: High to Low</option>
                        <option value="popularity">Popularity</option>
                    </SortDropdown>
                </FilterSection>

                <FilterSection>
                    <FilterTitle>Category</FilterTitle>
                    {['All', 'Electronics', 'Jewelery', "Men's Clothing", "Women's Clothing"].map((cat) => (
                        <FilterOption
                            key={cat}
                            className={category === cat.toLowerCase() ? 'active' : ''}
                            onClick={() => handleCategoryChange(cat.toLowerCase())}
                        >
                            <input
                                type="radio"
                                checked={category === cat.toLowerCase()}
                                onChange={() => handleCategoryChange(cat.toLowerCase())}
                            />
                            {cat}
                        </FilterOption>
                    ))}
                </FilterSection>

                <FilterSection>
                    <FilterTitle>Price Range</FilterTitle>
                    {['All', '0-100', '100-200', '200-500', '500-1000'].map((range) => (
                        <FilterOption
                            key={range}
                            className={priceRange === range.toLowerCase() ? 'active' : ''}
                            onClick={() => handlePriceRangeChange(range.toLowerCase())}
                        >
                            <input
                                type="radio"
                                checked={priceRange === range.toLowerCase()}
                                onChange={() => handlePriceRangeChange(range.toLowerCase())}
                            />
                            ${range.split('-').join(' - $')}
                        </FilterOption>
                    ))}
                </FilterSection>
            </SidebarContainer>
        </>
    );
}