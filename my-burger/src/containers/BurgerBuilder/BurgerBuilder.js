import React, { Component, Fragment } from "react";
import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BuildControls/BuildControls";
import { object } from "prop-types";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";

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
    showOrderSummary: false,
    loading: false,
  };

  showOrderSummaryHandler = () => {
    this.setState({ showOrderSummary: true });
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

  purchaseContinueHandler = () => {
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Ankit",
        address: {
          street: "GandhiStreet",
          zipcode: "560100",
          country: "India",
        },
        email: "Ankit@gmail.com",
      },
      deliveryMethod: "fastest",
    };

    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
    //alert("You Continue");
  };

  closeModalHandler = () => {
    this.setState({ showOrderSummary: false });
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
    let orderSummary = (
      <OrderSummary
        ingredients={this.state.ingredients}
        purchaseCancelled={this.closeModalHandler}
        purchaseContinue={this.purchaseContinueHandler}
        TotalPrice={this.state.totalPrice}
      />
    );

    if (this.state.loading) orderSummary = <Spinner />;

    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Fragment>
        <Modal
          show={this.state.showOrderSummary}
          modalClosed={this.closeModalHandler}
        >
          {orderSummary}
        </Modal>
        <Burger burgerIngredients={this.state.ingredients} />
        <BurgerControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          clicked={this.showOrderSummaryHandler}
        ></BurgerControls>
      </Fragment>
    );
  }
}

export default BurgerBuilder;
