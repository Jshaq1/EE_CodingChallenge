import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios'; // Mock Axios if necessary
import App from './App';


jest.mock('axios');

const mockApiData = [

];

beforeEach(() => {
    axios.get.mockResolvedValue({ data: mockApiData });
});

test('renders the App component', async () => {
    render(<App />);

    await waitFor(() => expect(screen.queryByTestId('loader')).not.toBeInTheDocument());
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByTestId('products-list')).toBeInTheDocument();


});