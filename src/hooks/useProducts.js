import {useQuery} from 'react-query';

const fetchProducts = async () => {
    console.log('fetching products');
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) throw new Error('Failed to fetch products');
    return response.json();
};

export function useProducts() {
    return useQuery('products', fetchProducts, {
        staleTime: 1000 * 60 * 5, // 5 minutes
    });
}
