import React, { Fragment } from "react";

const OrderSummary = (props) => {

const orderedIngredient = Object.keys(props.ingredients).map((igKey) => {
  return (
    <li key={igKey}>
     <span style={{textTransform:'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
    </li>
  );
});

  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>Burger with following ingredients</p>
      <ul>{orderedIngredient}</ul>
    </Fragment>
  );
};

export default OrderSummary;
