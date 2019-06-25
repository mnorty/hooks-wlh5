import React from 'react';

const LazyComponent = ({ name }) => {
    return (
        <React.Fragment>
            {name}
        </React.Fragment>
    )
};

export default LazyComponent;