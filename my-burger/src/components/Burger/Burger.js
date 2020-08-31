import React from "react";
import classes from './Burger.module.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

const burger = (props) => {
  
  let transformedIngredients=[];
  for(const key in props.burgerIngredients){
      for(var i=0;i<props.burgerIngredients[key];i++){
        transformedIngredients.push(<BurgerIngredients type={key} key={i}></BurgerIngredients>);
      }
  }

  if(transformedIngredients.length===0){
         transformedIngredients = <p>Please add ingredients</p>
       }

  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top"></BurgerIngredients>
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom"></BurgerIngredients>
    </div>
  );
};

export default burger;