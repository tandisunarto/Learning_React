import React from 'react';
import Aux from 'hoc/Aux';
import Button from 'components/UI/Button/Button';

const orderSummary = (props) => {
    let ingredientSummary = Object.keys(props.ingredients)
        .map(key => {
            return <li key={key}><span style={{textTransform: 'capitalize'}}>{key}</span>: {props.ingredients[key]}</li>
        });


    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout ?</p>
            <Button btnType="Success" clicked={props.orderContinue}>Continue</Button>
            <Button btnType="Danger" clicked={props.orderCancel}>Cancel</Button>
        </Aux>
    )
};

export default orderSummary;