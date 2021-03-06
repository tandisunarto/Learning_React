import React from 'react';
import * as _ from 'lodash';


var Numbers = (p) => {
    const numberClassName = (number) => {
        if (p.usedNumbers.indexOf(number) >= 0) {
            return 'used';
        }
        if (p.selectedNumbers.indexOf(number) >= 0) {
            return 'selected';
        }
    }

    return (
        <div className="card text-center">
             <div>
                {Numbers.list.map(
                    (number, i) => 
                        <span className={numberClassName(number)} 
                            onClick={() => p.selectNumber(number)}
                            key={i}>{number}</span>
                )}
            </div> 
        </div>
    );
}
Numbers.list = _.range(1, 10);

export default Numbers;