/*eslint-disable*/
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Cart from './index.jsx';
import { removeFromCart } from '../../store/slices/cartSlice.js';

const mockStore = configureStore([]);

const mockCartItems = [
    {
        id: 1,
        title: "Test Product 1",
        price: 29.99,
        quantity: 2,
        image: "test-image-1.jpg",
        category: "electronics",
        rating: { rate: 4.5, count: 120 }
    },
    {
        id: 2,
        title: "Test Product 2",
        price: 19.99,
        quantity: 1,
        image: "test-image-2.jpg",
        category: "clothing",
        rating: { rate: 4.0, count: 85 }
    }
];

describe('Cart Component', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            cart: {
                items: mockCartItems,
                totalAmount: 79.97
            }
        });
        store.dispatch = jest.fn();
    });

    test('renders cart with total amount', () => {
        render(
            <Provider store={store}>
                <Cart />
            </Provider>
        );

        expect(screen.getByText('Shopping Cart')).toBeInTheDocument();
        expect(screen.getByText('Total: $79.97')).toBeInTheDocument();
    });

    test('renders empty cart message when no items', () => {
        store = mockStore({
            cart: {
                items: [],
                totalAmount: 0
            }
        });

        render(
            <Provider store={store}>
                <Cart />
            </Provider>
        );

        expect(screen.getByText('Sepetiniz boş!')).toBeInTheDocument();
    });

    test('renders correct number of cart items', () => {
        render(
            <Provider store={store}>
                <Cart />
            </Provider>
        );

        const productCards = screen.getAllByRole('img');
        expect(productCards).toHaveLength(2);
    });

    test('displays correct item details', () => {
        render(
            <Provider store={store}>
                <Cart />
            </Provider>
        );

        expect(screen.getByText('Test Product 1')).toBeInTheDocument();
        expect(screen.getByText('electronics')).toBeInTheDocument();
        expect(screen.getByText('$29.99 x 2')).toBeInTheDocument();
        expect(screen.getByText('4.5 yıldız | 120 yorum')).toBeInTheDocument();
    });

    test('dispatches removeFromCart action when remove button clicked', () => {
        render(
            <Provider store={store}>
                <Cart />
            </Provider>
        );

        const removeButtons = screen.getAllByText('Remove');
        fireEvent.click(removeButtons[0]);

        expect(store.dispatch).toHaveBeenCalledWith(removeFromCart(mockCartItems[0]));
    });

    test('renders images with correct attributes', () => {
        render(
            <Provider store={store}>
                <Cart />
            </Provider>
        );

        const images = screen.getAllByRole('img');
        expect(images[0]).toHaveAttribute('src', 'test-image-1.jpg');
        expect(images[0]).toHaveAttribute('alt', 'Test Product 1');
        expect(images[0]).toHaveAttribute('width', '50');
        expect(images[0]).toHaveAttribute('loading', 'lazy');
    });
});