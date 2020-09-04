import React, { Component, Fragment } from "react";
import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BuildControls/BuildControls";
import { object } from "prop-types";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

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
    purchasable: false,
  };

  updatePurchaseState = (ingredients) => {
    let arrayOfIngredientsNumber = Object.keys(ingredients).map((igKey) => {
      return ingredients[igKey];
    });

    //adding array elements
    const sum = arrayOfIngredientsNumber.reduce((sum, el) => {
      return sum + el;
    }, 0);
    this.setState({ purchasable: sum > 0 });
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
    this.updatePurchaseState(updatedIngredients);
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
    this.updatePurchaseState(updatedIngredients);
  };

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Fragment>
        <Modal><OrderSummary ingredients = {this.state.ingredients}/></Modal>
        <Burger burgerIngredients={this.state.ingredients} />
        <BurgerControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
        ></BurgerControls>
      </Fragment>
    );
  }
}

export default BurgerBuilder;
