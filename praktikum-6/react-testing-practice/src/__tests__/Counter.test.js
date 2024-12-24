import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from '../components/Counter';
describe('Counter Component', () => {
    test('renders the initial count value as 0', () => {
        render(<Counter />);
        const countValue = screen.getByTestId('count-value');
        expect(countValue).toHaveTextContent('0');
    });
    test('increments count when increment button is clicked', () => {
        render(<Counter />);
        const countValue = screen.getByTestId('count-value');
        const incrementButton = screen.getByText('Increment');
        fireEvent.click(incrementButton);
        expect(countValue).toHaveTextContent('1');
    });
    test('decrements count when decrement button is clicked', () => {
        render(<Counter />);
        const countValue = screen.getByTestId('count-value');
        const decrementButton = screen.getByText('Decrement');
        fireEvent.click(decrementButton);
        expect(countValue).toHaveTextContent('-1');
    });
    test('reset count when reset button is clicked', () => {
        render(<Counter/>);
        const countValue = screen.getByTestId('count-value');
        const decrementButton = screen.getByText('Reset');
        fireEvent.click(decrementButton);
        expect(countValue).toHaveTextContent('0');
    })
});