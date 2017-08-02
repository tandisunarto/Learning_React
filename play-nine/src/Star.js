import React from 'react';
import * as _ from 'lodash';

const Star = (props) => {
    return (
        <div className="col-5">
            {_.range(props.numberOfStars).map(i => <i key={i} className="fa fa-star"></i>)}
        </div>
    );
}

export default Star