import React, { Component, Fragment } from "react";
import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICE = {
  salad: 2,
  cheese: 3,
  bacon: 4,
  meat: 5,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
    totalPrice: 4,
  };

  addIngredientHandler = (type) => {
    const updatedIngredients = { ...this.state.ingredients };
    const newCount = updatedIngredients[type] + 1;
    updatedIngredients[type] = newCount;

    var updatedPrice = this.state.totalPrice + INGREDIENT_PRICE[type];
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice,
    });
  };

  removeIngredientHandler = (type) => {
    const updatedIngredients = { ...this.state.ingredients };
    if (updatedIngredients[type] <= 0) return;
    const newCount = updatedIngredients[type] - 1;
    updatedIngredients[type] = newCount;

    var updatedPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice,
    });
  };

  render() {
    const disabledInfo = { ...this.state.ingredients };
     for (let key in disabledInfo) {
       disabledInfo[key] = disabledInfo[key] <= 0;
     }
    return (
      <Fragment>
        <Burger burgerIngredients={this.state.ingredients} />
        <BurgerControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
        ></BurgerControls>
      </Fragment>
    );
  }
}

export default BurgerBuilder;
