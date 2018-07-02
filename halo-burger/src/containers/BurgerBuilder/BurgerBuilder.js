import React, { Component } from 'react';
import Aux from "hoc/Aux";
import Burger from 'components/Burger/Burger';
import BuildControls from 'components/Burger/BuildControls/BuildControls';
import Modal from 'components/UI/Modal/Modal';
import OrderSummary from 'components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_COST = {
    salad: 0.5,
    cheese: 0.6,
    bacon: 0.9,
    meat: 1.4,

}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        canOrderNow: false
    }

    updateCanOrderNow(updatedIngredients) {
        let ingredients = updatedIngredients;
        
        let sum = Object.keys(ingredients)
            .map(key => {
                return ingredients[key];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);

        this.setState({
            canOrderNow: sum > 0
        })
    }

    addIngredientHandler = (type) => {
        let newQty = this.state.ingredients[type] + 1;
        let updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = newQty;                
        this.setState((prevState, props) => {
            return {
                totalPrice: prevState.totalPrice + INGREDIENT_COST[type],
                ingredients: updatedIngredients
            }
        })
        this.updateCanOrderNow(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        if (this.state.ingredients[type] > 0) {
            let newQty = this.state.ingredients[type] - 1;
            let updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type] = newQty;
            let newTotalPrice = this.state.totalPrice - INGREDIENT_COST[type];
            this.setState({
                totalPrice: newTotalPrice,
                ingredients: updatedIngredients
            })
            this.updateCanOrderNow(updatedIngredients);
        }
    }

    render() {

        let disabledInfo = { ...this.state.ingredients};
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return ( 
        <Aux>
            <Modal>
                <OrderSummary ingredients={this.state.ingredients}/>
            </Modal>
            <Burger ingredients={this.state.ingredients} />
            <BuildControls 
                ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.removeIngredientHandler}
                disabled={disabledInfo}
                canOrderNow={this.state.canOrderNow}
                price={this.state.totalPrice}
            />
        </Aux>
        )
    }
}

export default BurgerBuilder;