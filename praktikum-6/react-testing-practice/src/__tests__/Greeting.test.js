import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Greeting } from '../components/Greeting';

describe('Greeting Component', () => {
    test('renders the correct greeting text based on the name prop', () => {
        render(<Greeting name="John" />);
        const greetingText = screen.getByText('Hello John');
        expect(greetingText).toBeInTheDocument();
    });

    test('renders correctly when name prop is empty', () => {
        render(<Greeting name="" />);
        const greetingText = screen.getByText('Hello');
        expect(greetingText).toBeInTheDocument();
    });
});