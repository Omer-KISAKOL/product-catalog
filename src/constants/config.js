export const API_CONFIG = {
  BASE_URL: "https://fakestoreapi.com",
  ENDPOINTS: {
    PRODUCTS: "/products",
  },
  CACHE_TIME: 1000 * 60 * 5, // 5 minutes
  STALE_TIME: 1000 * 60 * 5, // 5 minutes
};

export const UI_CONFIG = {
  ITEMS_PER_PAGE: 5,
  GRID_BREAKPOINTS: {
    MOBILE: 1,
    TABLET: 2,
    DESKTOP: 3,
    LG_DESKTOP: 4,
  },
  LOADING_STATES: {
    INITIAL: "Loading products...",
    ERROR: "Error loading products. Please try again.",
  },
};
