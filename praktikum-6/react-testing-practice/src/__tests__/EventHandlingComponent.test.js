import EventHandlingComponent from '../components/EventHandlingComponent';
import { render, screen, fireEvent } from '@testing-library/react';

describe('EventHandlingComponent', () => {
    test('triggers alert when Show Alert button is clicked', () => {
        window.alert = jest.fn(); // Mock the alert function
        render(<EventHandlingComponent />);
        const alertButton = screen.getByText('Show Alert');
        fireEvent.click(alertButton);
        expect(window.alert).toHaveBeenCalledWith('Button clicked!');
    });

    test('changes message text when Change Message button is clicked', () => {
        render(<EventHandlingComponent />);
        const changeMessageButton = screen.getByText('Change Message');
        const messageText = screen.getByTestId('message-text');
        fireEvent.click(changeMessageButton);
        expect(messageText).toHaveTextContent('New message');
    });
});