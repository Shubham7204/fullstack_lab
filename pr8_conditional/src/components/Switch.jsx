import React from 'react';

const SwitchComponent = ({ currentView }) => {
    let content;

    switch (currentView) {
        case 'home':
            content = <h1>Welcome to Home</h1>;
            break;
        case 'about':
            content = <h1>Welcome to About Us</h1>;
            break;
        case 'learn':
            content = <h1>Welcome to Learn</h1>;
            break;
        default:
            content = <h1>Welcome!</h1>;
    }

    return <div>{content}</div>;
};

export default SwitchComponent;
