import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductCard from './ProductCard';

const mockProductDetails = {
    id: 1,
    title: 'Sample Product',
    image: 'sample.jpg',
    price: 9.99,
};

test('renders a ProductCard component', () => {
    render(
        <MemoryRouter>
            <ProductCard productDetails={mockProductDetails} />
        </MemoryRouter>
    );
    expect(screen.getByText('Sample Product')).toBeInTheDocument();
    expect(screen.getByText('$9.99')).toBeInTheDocument();
    expect(screen.getByAltText('Sample Product')).toBeInTheDocument();

    const productLink = screen.getByRole('link', { name: 'Sample Product' });
    expect(productLink).toHaveAttribute('href', '/product/1');

});