import React from 'react';

const TestLabel = (props) => {
    return React.createElement(
        'span', 
        { id : "City", className: "Blue-Font"}
        , "Washington DC")
}

export {
    TestLabel,
};