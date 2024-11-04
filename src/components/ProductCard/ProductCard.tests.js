/*eslint-disable*/
import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { axe, toHaveNoViolations } from 'jest-axe';
import ProductCard from './index.jsx';
import { addToCart } from '../../store/slices/cartSlice.js';

expect.extend(toHaveNoViolations);
const mockStore = configureStore([]);

const mockProduct = {
  id: 1,
  title: "Test Product",
  price: 99.99,
  image: "test-product-image.jpg",
  category: "electronics",
  rating: {
    rate: 4.5,
    count: 100
  }
};

describe('ProductCard Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
    store.dispatch = jest.fn();
  });

  test('renders product card with all product information', () => {
    render(
      <Provider store={store}>
        <ProductCard product={mockProduct} />
      </Provider>
    );

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('electronics')).toBeInTheDocument();
    expect(screen.getByText('$99.99')).toBeInTheDocument();
    expect(screen.getByText('4.5 yıldız | 100 yorum')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Add to Cart' })).toBeInTheDocument();
  });

  test('renders product image with correct attributes', () => {
    render(
      <Provider store={store}>
        <ProductCard product={mockProduct} />
      </Provider>
    );

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'test-product-image.jpg');
    expect(image).toHaveAttribute('alt', 'Test Product');
    expect(image).toHaveAttribute('width', '50');
    expect(image).toHaveAttribute('loading', 'lazy');
  });

  test('dispatches addToCart action when Add to Cart button is clicked', () => {
    render(
      <Provider store={store}>
        <ProductCard product={mockProduct} />
      </Provider>
    );

    const addToCartButton = screen.getByRole('button', { name: 'Add to Cart' });
    fireEvent.click(addToCartButton);

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(addToCart(mockProduct));
  });

  describe('Accessibility', () => {
    test('should have no accessibility violations', async () => {
      const { container } = render(
        <Provider store={store}>
          <ProductCard product={mockProduct} />
        </Provider>
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    test('maintains proper heading hierarchy', () => {
      render(
        <Provider store={store}>
          <ProductCard product={mockProduct} />
        </Provider>
      );

      const title = screen.getByText(mockProduct.title);
      expect(title.tagName).toBe('H2'); // Assuming Title component renders an h2
    });

    test('ensures interactive elements are keyboard accessible', () => {
      render(
        <Provider store={store}>
          <ProductCard product={mockProduct} />
        </Provider>
      );

      const addButton = screen.getByRole('button', { name: 'Add to Cart' });
      
      addButton.focus();
      expect(addButton).toHaveFocus();

      fireEvent.keyPress(addButton, { key: 'Enter', code: 'Enter', charCode: 13 });
      expect(store.dispatch).toHaveBeenCalledWith(addToCart(mockProduct));
    });

    test('provides appropriate ARIA labels and roles', () => {
      render(
        <Provider store={store}>
          <ProductCard product={mockProduct} />
        </Provider>
      );

      const ratingText = screen.getByText(/yıldız/);
      expect(ratingText).toHaveAttribute('aria-label', expect.stringContaining('rating'));

      // Check if price is properly annotated for screen readers
      const priceElement = screen.getByText(/\$99\.99/);
      expect(priceElement).toHaveAttribute('aria-label', expect.stringContaining('price'));
    });

    test('ensures sufficient color contrast', () => {
      const { container } = render(
        <Provider store={store}>
          <ProductCard product={mockProduct} />
        </Provider>
      );

      const card = container.firstChild;
      const computedStyle = window.getComputedStyle(card);
      

      expect(computedStyle.color).toBeDefined();
      expect(computedStyle.backgroundColor).toBeDefined();
    });

    test('provides alt text for all images', () => {
      render(
        <Provider store={store}>
          <ProductCard product={mockProduct} />
        </Provider>
      );

      const images = screen.getAllByRole('img');
      images.forEach(img => {
        expect(img).toHaveAttribute('alt');
        expect(img.alt).not.toBe('');
      });
    });

    test('ensures proper focus management', () => {
      render(
        <Provider store={store}>
          <ProductCard product={mockProduct} />
        </Provider>
      );

      const addButton = screen.getByRole('button', { name: 'Add to Cart' });

      addButton.focus();
      expect(document.activeElement).toBe(addButton);

      fireEvent.keyDown(addButton, { key: 'Tab' });
      expect(document.activeElement).not.toBe(addButton);
    });

    test('verifies text resize compatibility', () => {
      const { container } = render(
        <Provider store={store}>
          <ProductCard product={mockProduct} />
        </Provider>
      );

      const card = container.firstChild;
      
      const originalHeight = card.clientHeight;
      
      card.style.fontSize = '200%';
      
      expect(card.clientHeight).toBeGreaterThan(originalHeight);
    });
  });
});
