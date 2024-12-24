import React, { useState } from 'react';

const EventHandlingComponent = () => {
    const [message, setMessage] = useState('');
    const handleClick = () => alert('Button clicked!');
    const handleChangeMessage = () => setMessage('New message');

    return (
        <div>
            <button onClick={handleClick}>Show Alert</button>
            <button onClick={handleChangeMessage}>Change Message</button>
            <p data-testid="message-text">{message}</p>
        </div>
    );
};
export default EventHandlingComponent;