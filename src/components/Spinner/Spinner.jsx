// Spinner.jsx
import React from 'react';

const Spinner = () => (
    <div className="flex justify-center items-center mt-10 h-[60vh]">
        <span className="loading loading-ring loading-lg"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
    </div>
);

export default Spinner;
