import React from "react";
import classes from './Burger.module.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

const burger = (props)=>{
 return (
     <div className={classes.Burger}>
         <BurgerIngredients type="bread-top"></BurgerIngredients>
         <BurgerIngredients type="cheese"></BurgerIngredients>
         <BurgerIngredients type="meat"></BurgerIngredients>
         <BurgerIngredients type="bread-bottom"></BurgerIngredients>
     </div>
 )
};

export default burger;