import React from 'react';
import * as _ from 'lodash';

const Star = (props) => {
    const numberOfStars = 1 + Math.floor(Math.random() * 9);

    return (
        <div className="col-5">
            {_.range(numberOfStars).map(i => <i key={i} className="fa fa-star"></i>)}
        </div>
    );
}

export default Star