export function Filters(products, filter, sort) {
    if (!products) return [];

    let filterProducts = [...products];

    // Filtreleme
    if (filter.category) {
        filterProducts = filterProducts.filter(
            (product) => product.category === filter.category
        );
    }
    if (filter.priceRange) {
        const [min, max] = filter.priceRange.split('-').map(Number);
        filterProducts = filterProducts.filter((product) => {
            if (max) return product.price >= min && product.price <= max;
            return product.price >= min;
        });
    }

    // Sıralama
    if (sort === 'price-down') {
        filterProducts.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-up') {
        filterProducts.sort((a, b) => b.price - a.price);
    }else if (sort === 'popularity') {
        // Rating'e göre sıralama (rating.rate -> rating.count)
        filterProducts.sort((a, b) => {
            if (b.rating.rate === a.rating.rate) {
                return b.rating.count - a.rating.count; // rate eşit ise count'a göre sıralama
            }
            return b.rating.rate - a.rating.rate; // büyükten küçüğe rate'e göre sıralama
        });
    }

    return filterProducts;
}