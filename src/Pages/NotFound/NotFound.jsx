import React from 'react';
import './NotFound.css';

const NotFound = () => {
return (
<div className="error-container">
    <h2 className="error-oops">Oops...</h2>
    <h1 className="error-code">404</h1>
    <p className="error-text">Not Found</p>
    <div className="error-image-container">
    <img
        src="./src/assets/img/Notfound.png"
        alt="404 Illustration"
        className="error-image"
    />
    </div>
</div>
);
};

export default NotFound;
