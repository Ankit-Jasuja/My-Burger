import React from "react";
import classes from './Burger.module.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

const burger = (props) => {
  const transformedIngredients = Object.keys(props.burgerIngredients).map(
    (igKey) => {
      return [...Array(props.burgerIngredients[igKey])].map((_, index) => {
        return (
          <BurgerIngredients
            type={igKey}
            key={igKey + index}
          ></BurgerIngredients>
        );
      });
    }
  );

  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top"></BurgerIngredients>
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom"></BurgerIngredients>
    </div>
  );
};

export default burger;