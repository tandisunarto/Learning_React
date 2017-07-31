import React from 'react';
import * as _ from 'lodash';


var Numbers = (p) => {
    // const arrayOfNumbers = _.range(1, 9);

    return (
        <div className="card text-center">
             <div>
                {Numbers.list.map(
                    (number, i) => <span key={i}>{number}</span>
                )}
            </div> 
        </div>
    );
}
Numbers.list = _.range(1, 10);

export default Numbers;