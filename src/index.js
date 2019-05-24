// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import TopNavbar from './TopNavbar';

// Create React nav component
const App = () => {
    return (
        <TopNavbar />
    ) 
};

// Take React component and show it on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);