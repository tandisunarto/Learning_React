import React from 'react';
import * as _ from 'lodash';


var Numbers = (p) => {
    const numberClassName = (number) => {
        if (p.selectedNumbers.indexOf(number) >= 0) {
            return 'selected';
        }
    }

    return (
        <div className="card text-center">
             <div>
                {Numbers.list.map(
                    (number, i) => <span className={numberClassName(number)} key={i}>{number}</span>
                )}
            </div> 
        </div>
    );
}
Numbers.list = _.range(1, 10);

export default Numbers;